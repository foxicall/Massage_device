<script setup>
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useData, withBase } from 'vitepress'

const { isDark } = useData()
const viewport = ref(null)
const state = ref('loading')
const selectedHead = ref('ball')
const autoRotate = ref(false)
const heads = [
  { id: 'ball', name: '球型頭', number: '01', description: '圓潤、接觸面積較大。透過模型觀察球型配件與活塞桿的連接方式。' },
  { id: 'fork', name: 'U 型頭', number: '02', description: '雙叉形結構，中間留有空隙。這不代表可以直接接觸脊椎、骨頭或肌腱。' },
  { id: 'bullet', name: '子彈頭', number: '03', description: '前端較窄，接觸面積較小、力量較集中。使用限制請先閱讀配件解析與安全禁忌。' }
]
const currentHead = computed(() => heads.find((head) => head.id === selectedHead.value))
let engine
let disposed = false
let resizeObserver
let intersectionObserver
let motionQuery
let removeListeners = () => {}

watch(selectedHead, (head) => engine?.setHead(head))
watch(autoRotate, (value) => engine?.setAutoRotate(value))
watch(isDark, () => engine?.updateTheme())

onMounted(async () => {
  try {
    // Import browser-only graphics code after hydration, never during SSR.
    const THREE = await import('./model-graphics.js')
    const { OrbitControls } = THREE
    if (disposed || !viewport.value) return

    const host = viewport.value
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 50)
    camera.position.set(-2.8, 1.8, 5.4)
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75))
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = THREE.PCFSoftShadowMap
    renderer.outputColorSpace = THREE.SRGBColorSpace
    renderer.toneMapping = THREE.ACESFilmicToneMapping
    renderer.toneMappingExposure = 1.5
    renderer.domElement.setAttribute('aria-label', '可拖曳旋轉的 3D 筋膜槍示意模型')
    renderer.domElement.setAttribute('role', 'img')
    host.appendChild(renderer.domElement)

    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.dampingFactor = 0.065
    controls.enablePan = false
    // Leave vertical touch scrolling to the page; use two fingers to zoom.
    renderer.domElement.style.touchAction = 'pan-y'
    controls.minDistance = 4.2
    controls.maxDistance = 10
    controls.minPolarAngle = Math.PI * 0.18
    controls.maxPolarAngle = Math.PI * 0.77
    controls.autoRotateSpeed = 0.65
    controls.target.set(-0.12, 0.05, 0)

    const geometries = new Set()
    const materials = new Set()
    const material = (options) => {
      const value = new THREE.MeshStandardMaterial(options)
      materials.add(value)
      return value
    }
    const shell = material({ color: '#253632', metalness: 0.65, roughness: 0.34 })
    const rubber = material({ color: '#151f1e', metalness: 0.05, roughness: 0.91 })
    const graphite = material({ color: '#34463f', metalness: 0.35, roughness: 0.55 })
    const accent = material({ color: '#44baa5', metalness: 0.55, roughness: 0.3 })
    const steel = material({ color: '#b8cac4', metalness: 0.85, roughness: 0.25 })
    const lightMaterial = material({ color: '#9ef5d5', emissive: '#36b88b', emissiveIntensity: 1.2 })
    const model = new THREE.Group()
    scene.add(model)

    function mesh(geometry, surface, parent, x = 0, y = 0, z = 0) {
      geometries.add(geometry)
      const item = new THREE.Mesh(geometry, surface)
      item.position.set(x, y, z)
      item.castShadow = true
      item.receiveShadow = true
      parent.add(item)
      return item
    }
    function cylinder(parent, surface, radiusTop, radiusBottom, length, x, y, z = 0, horizontal = true) {
      const item = mesh(new THREE.CylinderGeometry(radiusTop, radiusBottom, length, 48), surface, parent, x, y, z)
      if (horizontal) item.rotation.z = Math.PI / 2
      return item
    }

    // Body, vented motor housing, piston, and a slightly angled rubber grip.
    cylinder(model, shell, 0.46, 0.46, 1.6, 0.13, 0.7)
    mesh(new THREE.SphereGeometry(0.455, 40, 24), shell, model, 0.92, 0.7).scale.x = 0.48
    cylinder(model, accent, 0.468, 0.468, 0.075, -0.56, 0.7)
    cylinder(model, graphite, 0.28, 0.41, 0.27, -0.73, 0.7)
    cylinder(model, rubber, 0.235, 0.235, 0.12, -0.89, 0.7)
    cylinder(model, steel, 0.115, 0.115, 0.43, -1.12, 0.7)
    cylinder(model, rubber, 0.16, 0.16, 0.13, -1.34, 0.7)
    for (let i = 0; i < 5; i++) {
      cylinder(model, rubber, 0.463, 0.463, 0.022, 0.58 + i * 0.065, 0.7)
    }

    const handle = new THREE.Group()
    handle.position.set(0.38, -0.22, 0)
    handle.rotation.z = -0.15
    model.add(handle)
    cylinder(handle, shell, 0.27, 0.245, 1.65, 0, 0, 0, false)
    cylinder(handle, rubber, 0.257, 0.245, 1.12, 0, -0.2, 0, false)
    for (let i = 0; i < 9; i++) {
      cylinder(handle, graphite, 0.258, 0.258, 0.025, 0, -0.65 + i * 0.105, 0, false)
    }
    cylinder(handle, accent, 0.255, 0.255, 0.06, 0, -0.83, 0, false)
    mesh(new THREE.SphereGeometry(0.25, 32, 16), rubber, handle, 0, -0.85).scale.y = 0.28

    const powerButton = cylinder(model, steel, 0.105, 0.105, 0.026, 0.27, 0.7, 0.46, false)
    powerButton.rotation.x = Math.PI / 2
    const buttonInset = cylinder(model, rubber, 0.075, 0.075, 0.03, 0.27, 0.7, 0.48, false)
    buttonInset.rotation.x = Math.PI / 2
    for (let i = 0; i < 3; i++) {
      mesh(new THREE.SphereGeometry(0.018, 12, 8), lightMaterial, model, 0.13 + i * 0.11, 0.48, 0.405)
    }

    const headGroup = new THREE.Group()
    model.add(headGroup)
    function setHead(type) {
      headGroup.traverse((item) => {
        if (item.geometry) {
          item.geometry.dispose()
          geometries.delete(item.geometry)
        }
      })
      headGroup.clear()
      if (type === 'fork') {
        cylinder(headGroup, rubber, 0.095, 0.095, 0.45, -1.48, 0.7, 0, false)
        for (const y of [0.48, 0.92]) {
          cylinder(headGroup, rubber, 0.095, 0.095, 0.42, -1.68, y)
          mesh(new THREE.SphereGeometry(0.095, 24, 16), rubber, headGroup, -1.89, y)
        }
      } else if (type === 'bullet') {
        cylinder(headGroup, rubber, 0.17, 0.17, 0.26, -1.5, 0.7)
        const tip = mesh(new THREE.ConeGeometry(0.17, 0.39, 40), rubber, headGroup, -1.82, 0.7)
        tip.rotation.z = Math.PI / 2
      } else {
        cylinder(headGroup, rubber, 0.15, 0.15, 0.19, -1.47, 0.7)
        mesh(new THREE.SphereGeometry(0.36, 48, 32), rubber, headGroup, -1.77, 0.7)
      }
    }
    setHead(selectedHead.value)

    const ambient = new THREE.HemisphereLight('#effff8', '#40504a', 3)
    scene.add(ambient)
    const key = new THREE.DirectionalLight('#fff6e3', 5)
    key.position.set(-3, 6, 5)
    key.castShadow = true
    key.shadow.mapSize.set(1024, 1024)
    key.shadow.camera.left = -4
    key.shadow.camera.right = 4
    key.shadow.camera.top = 4
    key.shadow.camera.bottom = -4
    key.shadow.normalBias = 0.035
    key.shadow.radius = 4
    scene.add(key)
    const rim = new THREE.DirectionalLight('#73d9bf', 4)
    rim.position.set(3, 2, -4)
    scene.add(rim)
    const shadowMaterial = new THREE.ShadowMaterial({ color: '#173d32', opacity: 0.17 })
    materials.add(shadowMaterial)
    const floor = mesh(new THREE.PlaneGeometry(200, 200), shadowMaterial, scene, 0, -1.15, 0)
    floor.rotation.x = -Math.PI / 2
    floor.castShadow = false

    function updateTheme() {
      ambient.intensity = isDark.value ? 2.6 : 3
      shell.color.set(isDark.value ? '#3c514a' : '#253632')
      shadowMaterial.opacity = isDark.value ? 0.3 : 0.17
    }
    updateTheme()

    let frame = 0
    let inView = true
    let lastTime = 0
    const render = () => renderer.render(scene, camera)
    const animate = (time) => {
      const delta = lastTime ? Math.min((time - lastTime) / 1000, 0.05) : 0
      lastTime = time
      controls.update(delta)
      render()
      frame = requestAnimationFrame(animate)
    }
    const syncAnimation = () => {
      cancelAnimationFrame(frame)
      lastTime = 0
      if (!disposed && inView && !document.hidden) frame = requestAnimationFrame(animate)
    }

    engine = {
      setHead,
      updateTheme,
      setAutoRotate: (value) => { controls.autoRotate = value },
      reset() {
        controls.reset()
        model.rotation.set(0, 0, 0)
      },
      rotate(direction) { model.rotation.y += direction * Math.PI / 8 },
      zoom(factor) {
        const offset = camera.position.clone().sub(controls.target)
        offset.setLength(THREE.MathUtils.clamp(offset.length() * factor, controls.minDistance, controls.maxDistance))
        camera.position.copy(controls.target).add(offset)
        controls.update()
      },
      dispose() {
        cancelAnimationFrame(frame)
        controls.dispose()
        geometries.forEach((geometry) => geometry.dispose())
        materials.forEach((surface) => surface.dispose())
        key.shadow.map?.dispose()
        scene.clear()
        renderer.dispose()
        renderer.forceContextLoss()
        renderer.domElement.remove()
      }
    }

    const resize = () => {
      const { width, height } = host.getBoundingClientRect()
      if (!width || !height) return
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height)
      render()
    }
    resizeObserver = new ResizeObserver(resize)
    resizeObserver.observe(host)
    resize()
    motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const onMotionChange = () => {
      autoRotate.value = !motionQuery.matches
      controls.autoRotate = autoRotate.value
      controls.enableDamping = !motionQuery.matches
    }
    onMotionChange()
    motionQuery.addEventListener('change', onMotionChange)
    document.addEventListener('visibilitychange', syncAnimation)
    const onContextLost = (event) => {
      event.preventDefault()
      state.value = 'unavailable'
      cancelAnimationFrame(frame)
    }
    renderer.domElement.addEventListener('webglcontextlost', onContextLost)
    intersectionObserver = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting
      syncAnimation()
    }, { rootMargin: '120px' })
    intersectionObserver.observe(host)
    removeListeners = () => {
      document.removeEventListener('visibilitychange', syncAnimation)
      motionQuery.removeEventListener('change', onMotionChange)
      renderer.domElement.removeEventListener('webglcontextlost', onContextLost)
    }
    state.value = 'ready'
    syncAnimation()
  } catch (error) {
    if (!disposed) state.value = 'unavailable'
    resizeObserver?.disconnect()
    intersectionObserver?.disconnect()
    removeListeners()
    engine?.dispose()
    engine = undefined
    // Unsupported WebGL has a readable fallback; the rest of the guide stays usable.
    console.warn('3D 模型無法初始化，已顯示替代說明。', error)
  }
})

onBeforeUnmount(() => {
  disposed = true
  resizeObserver?.disconnect()
  intersectionObserver?.disconnect()
  removeListeners()
  engine?.dispose()
  engine = undefined
})
</script>

<template>
  <section class="interactive-model" aria-labelledby="model-heading">
    <div class="model-stage">
      <div class="model-stage-label"><span class="status-dot" /> INTERACTIVE EXPLORER <span class="model-dimension">3D</span></div>
      <div
        ref="viewport"
        class="model-viewport"
        :class="{ 'model-viewport-hidden': state === 'unavailable' }"
        tabindex="0"
        role="group"
        aria-label="3D 模型檢視區。拖曳旋轉、滾輪或雙指縮放；也可使用左右方向鍵旋轉，加減鍵縮放。"
        @keydown.left.prevent="engine?.rotate(-1)"
        @keydown.right.prevent="engine?.rotate(1)"
        @keydown.+.prevent="engine?.zoom(0.85)"
        @keydown.-.prevent="engine?.zoom(1.15)"
      />
      <div v-if="state === 'loading'" class="model-fallback" role="status">
        <span class="loading-ring" /> 正在準備 3D 模型…
      </div>
      <div v-if="state === 'unavailable'" class="model-fallback" role="status">
        <img :src="withBase('/favicon.svg')" alt="筋膜槍示意圖" width="80" height="80">
        <strong>此瀏覽器暫時無法顯示 3D 模型</strong>
        <span>請使用支援 WebGL 的瀏覽器，或直接閱讀右側配件說明。</span>
      </div>
      <div class="model-toolbar" aria-label="模型操作">
        <span class="model-gesture">拖曳旋轉 · 雙指縮放</span>
        <div class="model-tools">
          <button type="button" aria-label="縮小模型" :disabled="state !== 'ready'" @click="engine?.zoom(1.15)">−</button>
          <button type="button" aria-label="放大模型" :disabled="state !== 'ready'" @click="engine?.zoom(0.85)">＋</button>
          <button type="button" aria-label="重設模型視角" :disabled="state !== 'ready'" @click="engine?.reset()">重設</button>
          <button type="button" :aria-pressed="autoRotate" :disabled="state !== 'ready'" @click="autoRotate = !autoRotate">{{ autoRotate ? '暫停旋轉' : '自動旋轉' }}</button>
        </div>
      </div>
    </div>

    <div class="model-panel">
      <span class="section-eyebrow">MEET YOUR MASSAGE GUN</span>
      <h2 id="model-heading">換個角度，<br>認識你的放鬆工具。</h2>
      <p class="model-intro">轉一轉模型，觀察機身、握把與配件。<br>選一款按摩頭，看看它們有什麼不同。</p>
      <div class="head-switcher" role="group" aria-label="切換按摩頭">
        <button
          v-for="head in heads"
          :key="head.id"
          type="button"
          :aria-pressed="selectedHead === head.id"
          @click="selectedHead = head.id"
        >
          <span class="head-icon" :class="`head-icon-${head.id}`" aria-hidden="true" />
          {{ head.name }}
        </button>
      </div>
      <div class="head-description" aria-live="polite" aria-atomic="true">
        <span class="head-number">{{ currentHead.number }}</span>
        <div><strong>{{ currentHead.name }}</strong><p>{{ currentHead.description }}</p></div>
      </div>
      <a class="model-guide-link" :href="withBase('/instruction#accessories')">查看完整配件解析 <span aria-hidden="true">↗</span></a>
      <p class="model-note">模型僅為構造示意，不代表特定產品、實際震幅或操作手法。</p>
    </div>
  </section>
</template>
