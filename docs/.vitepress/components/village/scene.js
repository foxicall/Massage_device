import { stations } from './stations.js'
import { createNavigator } from './navigation.js'

// Browser graphics are initialized only by the village component's onMounted hook.
export function createVillageScene(T, host, labels, callbacks) {
  const geometries = new Map()
  const materials = new Map()
  const cleanups = []
  let renderer, controls, frame = 0, disposed = false, paused = false, visible = true
  let dirty = true, lastTime = 0, lastRender = 0, lastReport = 0, elapsed = 0
  let lightMode = callbacks.lightMode, reducedMotion = callbacks.reducedMotion
  let mode = 'free', path = [], destinationStation = null, focus = null
  let selectedId = null, pointerStart = null
  let slowFrames = 0
  const held = new Set()
  const pointers = new Set()
  const blockedStations = new Set()
  let joystick = { x: 0, y: 0 }
  const scene = new T.Scene()
  const camera = new T.OrthographicCamera(-8, 8, 6, -6, .1, 100)
  const obstacles = stations.map(s => ({ x: s.position[0], z: s.position[1], radius: s.id === 'training' ? .95 : .84 }))
  obstacles.push({ x: 0, z: 0, radius: .93 })
  const navigator = createNavigator(obstacles)
  const actor = new T.Group()
  actor.position.set(-1.15, .16, 1.55)
  const hits = []

  function geometry(key, factory) {
    if (!geometries.has(key)) geometries.set(key, factory())
    return geometries.get(key)
  }
  function surface(color, opacity = 1) {
    const key = `${color}-${opacity}`
    if (!materials.has(key)) materials.set(key, new T.MeshStandardMaterial({ color, roughness: .9, flatShading: true, transparent: opacity < 1, opacity }))
    return materials.get(key)
  }
  function mesh(shape, color, at, size, parent = scene, opacity = 1) {
    const shapes = {
      box: () => new T.BoxGeometry(1, 1, 1),
      cylinder: () => new T.CylinderGeometry(1, 1, 1, 10),
      hex: () => new T.CylinderGeometry(1, 1, 1, 6),
      roof: () => new T.ConeGeometry(1, 1, 4),
      cone: () => new T.ConeGeometry(1, 1, 7),
      sphere: () => new T.SphereGeometry(1, 12, 8),
      rock: () => new T.IcosahedronGeometry(1, 0)
    }
    const item = new T.Mesh(geometry(shape, shapes[shape]), surface(color, opacity))
    item.position.set(...at)
    item.scale.set(...size)
    item.castShadow = opacity === 1
    item.receiveShadow = true
    parent.add(item)
    return item
  }
  function ring(radius, width, color, y, parent = scene) {
    const item = new T.Mesh(geometry(`ring-${radius}-${width}`, () => new T.TorusGeometry(radius, width, 6, 64)), surface(color))
    item.rotation.x = Math.PI / 2
    item.position.y = y
    item.scale.z = .18
    item.receiveShadow = true
    parent.add(item)
    return item
  }
  function tree(x, z, scale = 1) {
    const group = new T.Group()
    group.position.set(x, .12, z)
    group.scale.setScalar(scale)
    mesh('cylinder', '#a17c51', [0, .35, 0], [.09, .7, .09], group)
    mesh('rock', '#6c9b5d', [0, .97, 0], [.48, .62, .48], group)
    mesh('rock', '#96b970', [.2, .85, .12], [.32, .4, .32], group)
    scene.add(group)
  }
  function pathBetween(a, b) {
    const length = Math.hypot(b[0] - a[0], b[1] - a[1])
    const item = mesh('box', '#eadbb5', [(a[0] + b[0]) / 2, .127, (a[1] + b[1]) / 2], [.48, .035, length])
    item.rotation.y = Math.atan2(b[0] - a[0], b[1] - a[1])
  }
  function house(group, wall, roofColor, width = 1.15) {
    mesh('box', '#eadfbc', [0, .12, 0], [width + .18, .2, 1.12], group)
    mesh('box', wall, [0, .6, 0], [width, .9, .93], group)
    const roof = mesh('roof', roofColor, [0, 1.28, 0], [width * .86, .62, .85], group)
    roof.rotation.y = Math.PI / 4
    mesh('box', '#8f6d49', [0, .43, .475], [.24, .6, .035], group)
    for (const x of [-.36, .36]) {
      mesh('box', '#f8f3dc', [x, .68, .48], [.26, .3, .04], group)
      mesh('box', '#7da89d', [x, .68, .505], [.19, .23, .02], group)
    }
  }
  function buildStation(station) {
    const group = new T.Group()
    group.position.set(station.position[0], .12, station.position[1])
    group.userData.stationId = station.id
    mesh('cylinder', '#e5d7b3', [0, .025, 0], [1.03, .07, 1.03], group)
    if (station.id === 'welcome') {
      for (const x of [-.5, .5]) {
        mesh('box', '#e9e4c8', [x, .6, 0], [.34, 1.2, .5], group)
        const roof = mesh('roof', '#457b61', [x, 1.35, 0], [.38, .4, .43], group)
        roof.rotation.y = Math.PI / 4
      }
      mesh('box', '#42765b', [0, 1.12, .03], [.95, .28, .25], group)
      mesh('box', '#e9d5a8', [0, .25, .4], [.7, .15, .32], group)
      mesh('box', '#b18a5a', [0, .42, .55], [.85, .14, .35], group)
    } else if (station.id === 'workshop') {
      house(group, '#efd4b0', '#b77855')
      mesh('box', '#897f70', [.38, 1.35, -.23], [.22, .7, .23], group)
      mesh('box', '#535e58', [-.3, .37, .83], [.43, .17, .25], group)
      mesh('box', '#72786e', [-.3, .49, .83], [.58, .12, .29], group)
      mesh('cylinder', '#b5905e', [.48, .25, .75], [.16, .5, .16], group)
    } else if (station.id === 'training') {
      mesh('box', '#8faa76', [0, .13, 0], [1.45, .1, 1.35], group)
      for (const x of [-.62, .62]) mesh('box', '#c5a36d', [x, .66, -.36], [.1, 1.1, .1], group)
      mesh('box', '#d8bd83', [0, 1.23, -.36], [1.43, .16, .18], group)
      for (const x of [-.4, 0, .4]) mesh('cone', '#d7a069', [x, .32, .36], [.13, .35, .13], group)
      mesh('box', '#eadfc1', [0, .2, -.12], [.7, .08, .45], group)
    } else if (station.id === 'guardian') {
      mesh('cylinder', '#c2bca4', [0, .8, 0], [.48, 1.6, .48], group)
      mesh('cylinder', '#e9dfc3', [0, 1.6, 0], [.62, .15, .62], group)
      mesh('cone', '#b85f52', [0, 1.98, 0], [.72, .66, .72], group)
      mesh('cylinder', '#8b6c48', [.38, 1.85, .3], [.025, 1.3, .025], group)
      mesh('box', '#d87965', [.58, 2.3, .3], [.4, .25, .045], group)
      mesh('box', '#fbf0d8', [0, .9, .48], [.28, .35, .03], group)
      mesh('box', '#b65a4c', [0, .92, .505], [.055, .18, .02], group)
    } else if (station.id === 'healing') {
      house(group, '#f1e7cd', '#7c9d65')
      mesh('box', '#bb9567', [0, .28, .84], [.85, .12, .3], group)
      mesh('box', '#e4c48c', [0, .42, .92], [.78, .2, .13], group)
      for (const x of [-.65, .65]) {
        mesh('cylinder', '#c69773', [x, .17, .5], [.12, .2, .12], group)
        mesh('rock', '#6d9d63', [x, .4, .5], [.19, .25, .19], group)
      }
    } else if (station.id === 'wisdom') {
      mesh('cylinder', '#efe9cf', [0, .28, 0], [.75, .48, .75], group)
      mesh('cylinder', '#9fcfca', [0, .53, 0], [.63, .025, .63], group)
      mesh('cylinder', '#e1d8b9', [0, .75, 0], [.12, .6, .12], group)
      mesh('sphere', '#9cc6b6', [0, 1.12, 0], [.24, .24, .24], group)
      ring(.41, .018, '#d7eee1', .55, group)
    } else {
      house(group, '#f3edda', '#638e83')
      mesh('box', '#fff9e6', [0, 1, .49], [.5, .35, .06], group)
      mesh('box', '#579b83', [0, 1, .53], [.09, .27, .025], group)
      mesh('box', '#579b83', [0, 1, .53], [.27, .09, .025], group)
    }
    group.traverse(object => { if (object.isMesh) hits.push(object) })
    scene.add(group)
  }

  function dispose() {
    if (disposed) return
    disposed = true
    cancelAnimationFrame(frame)
    cleanups.reverse().forEach(fn => fn())
    controls?.dispose()
    geometries.forEach(g => g.dispose())
    materials.forEach(m => m.dispose())
    scene.traverse(object => { if (object.isLight) object.shadow?.map?.dispose() })
    scene.clear()
    renderer?.dispose()
    renderer?.forceContextLoss()
    renderer?.domElement.remove()
  }

  try {
    renderer = new T.WebGLRenderer({ antialias: !lightMode, alpha: false, powerPreference: 'low-power' })
    renderer.setClearColor('#d5e5d9')
    renderer.setPixelRatio(lightMode ? 1 : Math.min(window.devicePixelRatio || 1, 1.5))
    renderer.shadowMap.enabled = !lightMode
    renderer.shadowMap.type = T.PCFShadowMap
    renderer.toneMapping = T.ACESFilmicToneMapping
    renderer.toneMappingExposure = 1.2
    renderer.outputColorSpace = T.SRGBColorSpace
    renderer.domElement.setAttribute('role', 'img')
    renderer.domElement.setAttribute('aria-label', '筋膜舒緩村：七座建築、綠意步道與可移動的放鬆夥伴')
    host.prepend(renderer.domElement)
    camera.position.set(10, 11, 12)
    controls = new T.OrbitControls(camera, renderer.domElement)
    controls.target.set(0, .4, 0)
    controls.enableDamping = !reducedMotion
    controls.dampingFactor = .08
    controls.minPolarAngle = .35
    controls.maxPolarAngle = 1.25
    controls.minZoom = .7
    controls.maxZoom = 2.6
    controls.enablePan = true
    controls.update()
    const onChange = () => { dirty = true }
    const onStart = () => { focus = null }
    controls.addEventListener('change', onChange)
    controls.addEventListener('start', onStart)
    cleanups.push(() => { controls.removeEventListener('change', onChange); controls.removeEventListener('start', onStart) })

    const ambient = new T.AmbientLight('#fff9e9', 2)
    scene.add(ambient)
    const sun = new T.DirectionalLight('#fff0cc', 3)
    sun.position.set(-4, 12, 6)
    sun.castShadow = true
    sun.shadow.mapSize.set(512, 512)
    Object.assign(sun.shadow.camera, { left: -8, right: 8, top: 8, bottom: -8, near: .5, far: 30 })
    sun.shadow.camera.updateProjectionMatrix()
    sun.shadow.normalBias = .04
    sun.shadow.radius = 2
    scene.add(sun)
    mesh('cylinder', '#c1dcd3', [0, -.78, 0], [40, .1, 40]).castShadow = false
    const island = mesh('hex', '#c8b991', [0, -.34, 0], [6.3, .72, 6.3])
    island.rotation.y = Math.PI / 6
    const grass = mesh('hex', '#b8cb98', [0, .04, 0], [6.27, .13, 6.27])
    grass.rotation.y = Math.PI / 6
    const ground = grass
    ring(3.2, .2, '#e9dcb7', .14)
    mesh('cylinder', '#e7d8b1', [0, .12, 0], [1.15, .08, 1.15])
    for (const station of stations) {
      pathBetween([0, 0], station.position)
      buildStation(station)
    }
    tree(0, 0, 1.1)
    for (let i = 0; i < 14; i++) {
      const angle = i * Math.PI * 2 / 14 + .16
      const x = Math.cos(angle) * 5.25, z = Math.sin(angle) * 5.25
      if (stations.some(s => Math.hypot(x - s.position[0], z - s.position[1]) < 1.4)) continue
      tree(x, z, .75 + (i % 3) * .12)
      mesh('rock', '#b4b5a0', [x * 1.07, .15, z * 1.07], [.25, .22, .3])
    }
    for (let i = 0; i < 16; i++) {
      const a = i * 2.399
      const r = 1.8 + (i % 3) * .4
      const x = Math.cos(a) * r, z = Math.sin(a) * r
      if (Math.abs(x) < .4 || Math.abs(z) < .4) continue
      mesh('rock', i % 2 ? '#aabf7b' : '#91ae71', [x, .18, z], [.16, .12, .17])
      mesh('sphere', i % 2 ? '#efce9a' : '#e9b5a6', [x, .31, z], [.06, .06, .06])
    }

    actor.scale.setScalar(.7)
    mesh('cylinder', '#e2ad78', [0, .62, 0], [.19, .45, .19], actor)
    mesh('sphere', '#f4d9b4', [0, 1.02, .02], [.22, .25, .22], actor)
    mesh('sphere', '#5a6f55', [0, 1.15, -.04], [.23, .16, .22], actor)
    mesh('sphere', '#79a57c', [.05, 1.24, 0], [.22, .07, .2], actor)
    for (const x of [-.075, .075]) mesh('sphere', '#3b4c3e', [x, 1.04, .217], [.022, .028, .018], actor)
    mesh('box', '#a3b79a', [0, .66, -.18], [.27, .3, .13], actor)
    const limbs = []
    for (const side of [-1, 1]) {
      const leg = new T.Group()
      leg.position.set(side * .11, .43, 0)
      mesh('cylinder', '#eee7cd', [0, -.14, 0], [.075, .28, .075], leg)
      mesh('box', '#526154', [0, -.32, .03], [.14, .1, .2], leg)
      actor.add(leg)
      const arm = new T.Group()
      arm.position.set(side * .23, .75, 0)
      arm.rotation.z = side * .16
      mesh('cylinder', '#e9bd8d', [0, -.12, 0], [.055, .26, .055], arm)
      actor.add(arm)
      limbs.push({ leg, arm, side })
    }
    scene.add(actor)
    const marker = ring(.18, .025, '#4f9a7b', .16)
    marker.visible = false
    const ray = new T.Raycaster(), pointer = new T.Vector2()
    const forward = new T.Vector3(), right = new T.Vector3(), move = new T.Vector3(), up = new T.Vector3(0, 1, 0)
    const projected = new T.Vector3()

    function projectLabels() {
      for (const station of stations) {
        const element = labels.get(station.id)
        if (!element) continue
        projected.set(station.position[0], station.id === 'guardian' ? 2.8 : 1.9, station.position[1]).project(camera)
        element.hidden = Math.abs(projected.x) > .95 || Math.abs(projected.y) > .94 || projected.z > 1
        element.style.transform = `translate(${(projected.x + 1) * host.clientWidth / 2}px, ${(1 - projected.y) * host.clientHeight / 2}px) translate(-50%, -50%)`
      }
    }
    function render() {
      if (disposed || !visible || document.hidden) return
      renderer.render(scene, camera)
      projectLabels()
      dirty = false
    }
    function notifyPosition(time, moving) {
      if (time - lastReport < 120) return
      lastReport = time
      callbacks.onMove({ x: actor.position.x, z: actor.position.z, moving })
    }
    function cancelTravel() {
      path = []; destinationStation = null; marker.visible = false
      callbacks.onTravel(null)
    }
    function walkTo(point, stationId = null) {
      const route = navigator.findPath({ x: actor.position.x, z: actor.position.z }, point)
      if (!route.length) { callbacks.onNotice('這裡沒有可走的步道，換個地方試試。'); return }
      path = route.slice(1)
      destinationStation = stationId
      held.clear(); joystick = { x: 0, y: 0 }
      const last = route.at(-1)
      marker.position.set(last.x, .16, last.z)
      marker.visible = true
      callbacks.onTravel(stationId || 'ground')
      dirty = true
    }
    function focusStation(station) {
      focus = new T.Vector3(station.position[0] * .48, .5, station.position[1] * .48)
      if (reducedMotion) {
        const delta = focus.clone().sub(controls.target)
        controls.target.copy(focus); camera.position.add(delta); focus = null
      }
      dirty = true
    }
    function arrive(station) {
      selectedId = station.id
      cancelTravel()
      paused = true
      held.clear(); joystick = { x: 0, y: 0 }
      blockedStations.add(station.id)
      focusStation(station)
      callbacks.onStation(station.id)
    }
    function visit(id) {
      const station = stations.find(s => s.id === id)
      if (!station) return
      paused = false
      selectedId = id
      blockedStations.delete(id)
      const distance = Math.hypot(...station.position)
      const ratio = (distance - 1.4) / distance
      walkTo({ x: station.position[0] * ratio, z: station.position[1] * ratio }, id)
    }
    function translateActor(dx, dz) {
      const x = actor.position.x, z = actor.position.z
      const from = { x, z }
      if (navigator.segmentClear(from, { x: x + dx, z: z + dz })) actor.position.set(x + dx, .16, z + dz)
      else if (navigator.segmentClear(from, { x: x + dx, z })) actor.position.x += dx
      else if (navigator.segmentClear(from, { x, z: z + dz })) actor.position.z += dz
      return Math.hypot(actor.position.x - x, actor.position.z - z) > .0001
    }
    function updateQuality(value, notify = false) {
      if (lightMode === value) return
      lightMode = value
      renderer.shadowMap.enabled = !value
      renderer.setPixelRatio(value ? 1 : Math.min(window.devicePixelRatio || 1, 1.5))
      materials.forEach(item => { item.needsUpdate = true })
      dirty = true
      if (notify) callbacks.onLightMode?.(value)
    }
    function tick(time) {
      if (disposed) return
      const rawDelta = lastTime ? (time - lastTime) / 1000 : 0
      const dt = Math.min(rawDelta, .12)
      lastTime = time
      slowFrames = rawDelta > .12 && !paused ? slowFrames + 1 : 0
      if (slowFrames >= 3 && !lightMode) updateQuality(true, true)
      elapsed += dt
      let moving = false
      if (!paused && visible && !document.hidden) {
        const x = (held.has('d') || held.has('ArrowRight') ? 1 : 0) - (held.has('a') || held.has('ArrowLeft') ? 1 : 0) + joystick.x
        const y = (held.has('w') || held.has('ArrowUp') ? 1 : 0) - (held.has('s') || held.has('ArrowDown') ? 1 : 0) + joystick.y
        move.set(0, 0, 0)
        if (mode === 'free' && (Math.abs(x) > .05 || Math.abs(y) > .05)) {
          if (path.length) cancelTravel()
          camera.getWorldDirection(forward); forward.y = 0; forward.normalize()
          right.crossVectors(forward, up).normalize()
          move.copy(right).multiplyScalar(x).addScaledVector(forward, y)
          if (move.length() > 1) move.normalize()
        } else if (path.length) {
          const next = path[0]
          move.set(next.x - actor.position.x, 0, next.z - actor.position.z)
          if (move.length() < .04) {
            path.shift()
            if (path.length) move.set(path[0].x - actor.position.x, 0, path[0].z - actor.position.z)
            else move.set(0, 0, 0)
          }
          if (move.length()) move.normalize()
        }
        if (move.lengthSq()) {
          const maxStep = path.length ? Math.min(2.4 * dt, Math.hypot(path[0].x - actor.position.x, path[0].z - actor.position.z)) : 2.4 * dt
          moving = translateActor(move.x * maxStep, move.z * maxStep)
          if (moving) {
            const angle = Math.atan2(move.x, move.z)
            actor.rotation.y += Math.atan2(Math.sin(angle - actor.rotation.y), Math.cos(angle - actor.rotation.y)) * .25
            dirty = true
          }
        }
        for (const station of stations) {
          const distance = Math.hypot(actor.position.x - station.position[0], actor.position.z - station.position[1])
          if (distance > 1.95) blockedStations.delete(station.id)
          if (distance < 1.51 && !blockedStations.has(station.id) && (!destinationStation || destinationStation === station.id)) {
            arrive(station); break
          }
        }
        if (!path.length && marker.visible && !paused) { marker.visible = false; callbacks.onTravel(null); dirty = true }
      }
      for (const limb of limbs) {
        const swing = moving && !reducedMotion ? Math.sin(elapsed * 12) * .48 * limb.side : 0
        if (Math.abs(limb.leg.rotation.x - swing) > .001) dirty = true
        limb.leg.rotation.x = swing; limb.arm.rotation.x = -swing * .55
      }
      if (focus) {
        const delta = focus.clone().sub(controls.target)
        if (delta.length() < .01) focus = null
        else { delta.multiplyScalar(.09); controls.target.add(delta); camera.position.add(delta); dirty = true }
      }
      controls.update()
      notifyPosition(time, moving)
      if (dirty && time - lastRender > (lightMode ? 33 : 16)) { render(); lastRender = time }
      if (visible && !document.hidden) frame = requestAnimationFrame(tick)
    }
    const onPointerDown = event => {
      pointers.add(event.pointerId)
      pointerStart = pointers.size === 1 ? { x: event.clientX, y: event.clientY, button: event.button, id: event.pointerId } : null
    }
    const onPointerUp = event => {
      pointers.delete(event.pointerId)
      const start = pointerStart
      pointerStart = null
      if (paused || !start || start.id !== event.pointerId || pointers.size || start.button !== 0 || Math.hypot(event.clientX - start.x, event.clientY - start.y) > 7) return
      const bounds = renderer.domElement.getBoundingClientRect()
      pointer.set((event.clientX - bounds.left) / bounds.width * 2 - 1, -(event.clientY - bounds.top) / bounds.height * 2 + 1)
      ray.setFromCamera(pointer, camera)
      const hit = ray.intersectObjects(hits, false)[0]
      if (hit) {
        let object = hit.object
        while (object && !object.userData.stationId) object = object.parent
        if (object) { visit(object.userData.stationId); return }
      }
      if (mode !== 'free') return
      const groundHit = ray.intersectObject(ground, false)[0]
      if (groundHit) walkTo({ x: groundHit.point.x, z: groundHit.point.z })
    }
    renderer.domElement.addEventListener('pointerdown', onPointerDown)
    renderer.domElement.addEventListener('pointerup', onPointerUp)
    const onPointerCancel = event => { pointers.delete(event.pointerId); pointerStart = null }
    renderer.domElement.addEventListener('pointercancel', onPointerCancel)
    cleanups.push(() => { renderer.domElement.removeEventListener('pointerdown', onPointerDown); renderer.domElement.removeEventListener('pointerup', onPointerUp); renderer.domElement.removeEventListener('pointercancel', onPointerCancel) })
    const clearInput = () => { held.clear(); joystick = { x: 0, y: 0 }; lastTime = 0 }
    const onKeyDown = event => {
      if (paused || mode !== 'free' || event.ctrlKey || event.metaKey || event.altKey || !host.closest('.fascia-village')?.contains(document.activeElement) && document.activeElement !== document.body) return
      if (event.target.closest?.('input,textarea,select,[contenteditable],a,summary') || event.target.closest?.('button:not(.village-joystick)')) return
      const key = event.key.length === 1 ? event.key.toLowerCase() : event.key
      if (!['w', 'a', 's', 'd', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(key)) return
      event.preventDefault(); held.add(key)
    }
    const onKeyUp = event => held.delete(event.key.length === 1 ? event.key.toLowerCase() : event.key)
    window.addEventListener('keydown', onKeyDown); window.addEventListener('keyup', onKeyUp); window.addEventListener('blur', clearInput)
    cleanups.push(() => { window.removeEventListener('keydown', onKeyDown); window.removeEventListener('keyup', onKeyUp); window.removeEventListener('blur', clearInput) })
    const resize = () => {
      const { width, height } = host.getBoundingClientRect()
      if (!width || !height) return
      const aspect = width / height
      const halfWidth = Math.max(7.2, 5.3 * aspect), halfHeight = halfWidth / aspect
      Object.assign(camera, { left: -halfWidth, right: halfWidth, top: halfHeight, bottom: -halfHeight })
      camera.updateProjectionMatrix()
      renderer.setSize(width, height); dirty = true; render()
    }
    const resizeObserver = new ResizeObserver(resize)
    resizeObserver.observe(host)
    cleanups.push(() => resizeObserver.disconnect())
    const onVisibility = () => { cancelAnimationFrame(frame); clearInput(); dirty = true; if (visible && !document.hidden) frame = requestAnimationFrame(tick) }
    document.addEventListener('visibilitychange', onVisibility)
    cleanups.push(() => document.removeEventListener('visibilitychange', onVisibility))
    const onLost = event => { event.preventDefault(); paused = true; callbacks.onUnavailable() }
    renderer.domElement.addEventListener('webglcontextlost', onLost)
    cleanups.push(() => renderer.domElement.removeEventListener('webglcontextlost', onLost))
    resize()
    frame = requestAnimationFrame(tick)
    return {
      dispose, visit,
      setMode(value) { mode = value; clearInput(); cancelTravel() },
      setJoystick(x, y) { joystick = { x, y } },
      setPaused(value) { paused = value; clearInput(); if (value) cancelTravel() },
      setVisible(value) { cancelAnimationFrame(frame); visible = value; paused = !value; clearInput(); if (!value) cancelTravel(); dirty = true; if (value && !document.hidden) frame = requestAnimationFrame(tick) },
      setReducedMotion(value) { reducedMotion = value; controls.enableDamping = !value; dirty = true },
      setLightMode: updateQuality,
      resetView() {
        focus = null; controls.enableDamping = false; controls.update()
        camera.position.set(10, 11, 12); controls.target.set(0, .4, 0); camera.zoom = 1
        camera.updateProjectionMatrix(); controls.update(); controls.enableDamping = !reducedMotion; dirty = true
      },
      zoom(factor) { camera.zoom = T.MathUtils.clamp(camera.zoom * factor, controls.minZoom, controls.maxZoom); camera.updateProjectionMatrix(); dirty = true }
    }
  } catch (error) { dispose(); throw error }
}
