import { bodyZones, zonePatches } from './human-body-zones.js'

// Called only by HumanBody3D.onMounted. No browser APIs run when this module loads.
export function createHumanBodyScene(THREE, host, pinElements, options) {
  const geometries = new Set()
  const materials = new Set()
  const cleanups = []
  let renderer
  let controls
  let frame = 0
  let stopped = false
  let inView = true
  let contextLost = false
  let dark = options.dark
  let reducedMotion = options.reducedMotion
  let selected = 'quads'
  let filter = 'all'
  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(34, 1, .05, 50)
  const bodyMeshes = []
  const patches = new Map()
  const geometry = (value) => { geometries.add(value); return value }
  const material = (value) => { materials.add(value); return value }

  function dispose() {
    if (stopped) return
    stopped = true
    cancelAnimationFrame(frame)
    cleanups.reverse().forEach((cleanup) => cleanup())
    controls?.dispose()
    geometries.forEach((value) => value.dispose())
    materials.forEach((value) => value.dispose())
    scene.clear()
    renderer?.dispose()
    renderer?.forceContextLoss()
    renderer?.domElement.remove()
  }

  try {
    renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75))
    renderer.outputColorSpace = THREE.SRGBColorSpace
    renderer.toneMapping = THREE.ACESFilmicToneMapping
    renderer.toneMappingExposure = 1.25
    renderer.domElement.setAttribute('role', 'img')
    renderer.domElement.setAttribute('aria-label', '半透明線框人體模型與肌群位置示意')
    host.prepend(renderer.domElement)

    controls = new THREE.OrbitControls(camera, renderer.domElement)
    controls.enablePan = true
    controls.enableZoom = true
    controls.enableDamping = !reducedMotion
    controls.dampingFactor = .08
    controls.minPolarAngle = .05
    controls.maxPolarAngle = Math.PI - .05
    controls.maxDistance = 14
    controls.panSpeed = .65
    controls.rotateSpeed = .65
    // OrbitControls supports left drag to rotate, right drag to pan, and two-finger dolly/pan.
    renderer.domElement.style.touchAction = 'none'
    const onInteraction = () => options.onViewChange('custom')
    controls.addEventListener('start', onInteraction)
    cleanups.push(() => controls.removeEventListener('start', onInteraction))

    const skin = material(new THREE.MeshStandardMaterial({
      color: '#70aaa6', roughness: .4, metalness: .25,
      transparent: true, opacity: .76, emissive: '#123b36', emissiveIntensity: .12
    }))
    const wire = material(new THREE.LineBasicMaterial({
      color: '#348f83', transparent: true, opacity: .1, depthWrite: false
    }))
    const sphere = geometry(new THREE.SphereGeometry(1, 28, 20))
    const sphereWire = geometry(new THREE.WireframeGeometry(sphere))
    const body = new THREE.Group()
    scene.add(body)

    function ellipsoid(x, y, z, sx, sy, sz, rotation = 0) {
      const mesh = new THREE.Mesh(sphere, skin)
      mesh.position.set(x, y, z)
      mesh.scale.set(sx, sy, sz)
      mesh.rotation.z = rotation
      const lines = new THREE.LineSegments(sphereWire, wire)
      mesh.add(lines)
      body.add(mesh)
      bodyMeshes.push(mesh)
      return mesh
    }

    // Continuous lathed torso, with softly intersecting ellipsoids for limbs.
    const profile = new THREE.CatmullRomCurve3([
      [.27, .1], [.38, .28], [.39, .53], [.36, .76], [.4, 1.04],
      [.51, 1.29], [.55, 1.46], [.48, 1.61], [.31, 1.69], [.13, 1.75]
    ].map(([x, y]) => new THREE.Vector3(x, y, 0)))
    const torsoGeometry = geometry(new THREE.LatheGeometry(
      profile.getPoints(48).map(({ x, y }) => new THREE.Vector2(x, y)), 40
    ))
    const torso = new THREE.Mesh(torsoGeometry, skin)
    torso.scale.z = .6
    torso.add(new THREE.LineSegments(geometry(new THREE.WireframeGeometry(torsoGeometry)), wire))
    body.add(torso)
    bodyMeshes.push(torso)
    ellipsoid(0, 2.14, 0, .245, .335, .235) // head
    ellipsoid(0, 1.79, 0, .12, .23, .125) // neck
    ellipsoid(0, .18, 0, .405, .36, .3) // pelvis
    for (const side of [-1, 1]) {
      ellipsoid(side * .31, 1.59, 0, .28, .135, .195, side * -.23)
      ellipsoid(side * .57, 1.43, 0, .205, .225, .215)
      ellipsoid(side * .735, 1.02, 0, .14, .445, .145, side * .29)
      ellipsoid(side * .87, .59, 0, .13, .135, .14)
      ellipsoid(side * .97, .22, 0, .112, .4, .11, side * .24)
      ellipsoid(side * 1.055, -.13, 0, .075, .095, .08)
      ellipsoid(side * 1.085, -.34, 0, .105, .21, .067, side * .08)
      ellipsoid(side * .265, -.43, 0, .225, .635, .25, side * -.025)
      ellipsoid(side * .28, -1.06, 0, .14, .16, .15)
      ellipsoid(side * .3, -1.62, -.01, .137, .525, .165, side * -.025)
      ellipsoid(side * .31, -2.13, 0, .087, .14, .09)
      ellipsoid(side * .31, -2.34, .14, .13, .1, .285)
    }

    for (const zone of bodyZones) {
      const group = new THREE.Group()
      const surface = material(new THREE.MeshStandardMaterial({
        color: zone.kind === 'danger' ? '#e76a62' : '#12b39d',
        emissive: zone.kind === 'danger' ? '#dc4d49' : '#13a891',
        emissiveIntensity: .35, roughness: .55,
        transparent: true, opacity: .3, depthWrite: false
      }))
      for (const [x, y, z, sx, sy, sz] of zonePatches[zone.id]) {
        const mesh = new THREE.Mesh(sphere, surface)
        mesh.position.set(x, y, z)
        mesh.scale.set(sx, sy, sz)
        group.add(mesh)
      }
      scene.add(group)
      patches.set(zone.id, { group, surface, kind: zone.kind })
    }

    const ambient = new THREE.HemisphereLight('#e6fff8', '#3f5557', 2.5)
    scene.add(ambient)
    const key = new THREE.DirectionalLight('#fff6e5', 3.7)
    key.position.set(-3, 5, 5)
    scene.add(key)
    const rim = new THREE.DirectionalLight('#6ce4d7', 3)
    rim.position.set(3, 3, -4)
    scene.add(rim)

    const pedestal = new THREE.Group()
    const ringSurface = material(new THREE.MeshStandardMaterial({
      color: '#7aa49a', transparent: true, opacity: .25, roughness: .8
    }))
    for (const radius of [.8, 1.05, 1.3]) {
      const ring = new THREE.Mesh(geometry(new THREE.TorusGeometry(radius, .005, 6, 80)), ringSurface)
      ring.position.y = -2.5
      ring.rotation.x = Math.PI / 2
      pedestal.add(ring)
    }
    scene.add(pedestal)

    const raycaster = new THREE.Raycaster()
    const toCamera = new THREE.Vector3()
    const projected = new THREE.Vector3()
    const direction = new THREE.Vector3()
    const pins = bodyZones.flatMap((zone) => zone.pins.map((pin, index) => ({
      zone, position: new THREE.Vector3(...pin.position), normal: new THREE.Vector3(...pin.normal),
      element: pinElements.get(`${zone.id}-${index}`)
    })))

    function projectPins() {
      const { clientWidth: width, clientHeight: height } = host
      let caption
      let captionX = -Infinity
      for (const { zone, position, normal, element } of pins) {
        if (!element) continue
        element.dataset.caption = 'false'
        projected.copy(position).project(camera)
        toCamera.copy(camera.position).sub(position).normalize()
        let visible = (filter === 'all' || filter === zone.kind)
          && projected.z > -1 && projected.z < 1
          && Math.abs(projected.x) < .95 && Math.abs(projected.y) < .95
          && normal.dot(toCamera) > .06
        if (visible) {
          direction.copy(position).sub(camera.position)
          const distance = direction.length()
          raycaster.set(camera.position, direction.normalize())
          raycaster.far = Math.max(0, distance - .09)
          visible = raycaster.intersectObjects(bodyMeshes, false).length === 0
        }
        element.hidden = !visible
        if (visible) {
          const x = (projected.x * .5 + .5) * width
          const y = (-projected.y * .5 + .5) * height
          element.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`
          element.dataset.captionLeft = String(x > width * .65)
          if (zone.id === selected && x > captionX) {
            caption = element
            captionX = x
          }
        }
      }
      if (caption) caption.dataset.caption = 'true'
    }

    function render() {
      if (stopped || contextLost) return
      renderer.render(scene, camera)
      projectPins()
    }
    function animate() {
      if (stopped || contextLost) return
      controls.update()
      frame = requestAnimationFrame(animate)
    }
    function syncAnimation() {
      cancelAnimationFrame(frame)
      const running = !stopped && !contextLost && inView && !document.hidden
      options.onRunningChange(running)
      if (running && !reducedMotion) frame = requestAnimationFrame(animate)
      else if (running) render()
    }
    const onControlChange = () => {
      // Render wheel changes immediately, including when damping has no residual
      // motion; idle frames never redraw an unchanged scene.
      render()
    }
    controls.addEventListener('change', onControlChange)
    cleanups.push(() => controls.removeEventListener('change', onControlChange))

    function updateTheme(value) {
      dark = value
      skin.color.set(dark ? '#459c9a' : '#73a9a3')
      skin.opacity = dark ? .72 : .83
      wire.color.set(dark ? '#7ddccb' : '#317e74')
      wire.opacity = dark ? .12 : .07
      ambient.intensity = dark ? 2 : 2.5
      render()
    }
    function updateSelection(id, nextFilter) {
      selected = id
      filter = nextFilter
      for (const [key, patch] of patches) {
        patch.group.visible = filter === 'all' || filter === patch.kind
        patch.surface.opacity = key === selected ? .8 : patch.kind === 'danger' ? .3 : .17
        patch.surface.emissiveIntensity = key === selected ? .6 : .15
      }
      render()
    }
    function setView(view) {
      const sole = view === 'sole'
      pedestal.visible = !sole
      // Clear the previous orbit/pan inertia before applying the new camera pose.
      const damping = controls.enableDamping
      controls.enableDamping = false
      controls.update()
      controls.target.set(0, sole ? -2.23 : 0, sole ? .12 : 0)
      controls.minDistance = sole ? .8 : 3.8
      if (sole) camera.position.set(.05, -3.5, 2.7)
      else camera.position.set(0, .05, view === 'back' ? -9.2 : 9.2)
      controls.update()
      controls.enableDamping = damping
      options.onViewChange(view)
      render()
    }

    const resize = () => {
      const { width, height } = host.getBoundingClientRect()
      if (!width || !height) return
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height)
      render()
    }
    const resizeObserver = new ResizeObserver(resize)
    resizeObserver.observe(host)
    cleanups.push(() => resizeObserver.disconnect())
    const intersectionObserver = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting
      syncAnimation()
    }, { rootMargin: '100px' })
    intersectionObserver.observe(host)
    cleanups.push(() => intersectionObserver.disconnect())
    document.addEventListener('visibilitychange', syncAnimation)
    cleanups.push(() => document.removeEventListener('visibilitychange', syncAnimation))
    const onContextLost = (event) => {
      event.preventDefault()
      contextLost = true
      syncAnimation()
      options.onUnavailable()
    }
    renderer.domElement.addEventListener('webglcontextlost', onContextLost)
    cleanups.push(() => renderer.domElement.removeEventListener('webglcontextlost', onContextLost))

    updateTheme(dark)
    resize()
    setView('front')
    updateSelection(selected, filter)
    syncAnimation()
    return {
      dispose, updateSelection, updateTheme, setView,
      setReducedMotion(value) {
        reducedMotion = value
        controls.enableDamping = !value
        syncAnimation()
      },
      zoom(factor) {
        const offset = camera.position.clone().sub(controls.target)
        offset.setLength(THREE.MathUtils.clamp(offset.length() * factor, controls.minDistance, controls.maxDistance))
        camera.position.copy(controls.target).add(offset)
        controls.update()
        render()
      },
      orbit(direction) {
        const offset = camera.position.clone().sub(controls.target)
        offset.applyAxisAngle(new THREE.Vector3(0, 1, 0), direction * Math.PI / 10)
        camera.position.copy(controls.target).add(offset)
        controls.update()
        options.onViewChange('custom')
        render()
      },
      pan(x, y) {
        const offset = new THREE.Vector3(x, y, 0).applyQuaternion(camera.quaternion)
        controls.target.add(offset)
        camera.position.add(offset)
        controls.update()
        options.onViewChange('custom')
        render()
      }
    }
  } catch (error) {
    dispose()
    throw error
  }
}
