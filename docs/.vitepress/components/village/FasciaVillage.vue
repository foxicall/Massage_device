<script setup>
import { computed, nextTick, onBeforeUnmount, onMounted, ref, useId, watch } from 'vue'
import { withBase } from 'vitepress'
import VillageDialog from './VillageDialog.vue'
import { stations } from './stations.js'
import './village.css'

const id = useId(), host = ref(null), root = ref(null), joystickPad = ref(null)
const status = ref('loading'), mode = ref('free'), flatChoice = ref(false), listOpen = ref(false), lightMode = ref(false)
const index = ref(-1), dialogOpen = ref(false), traveling = ref(null), notice = ref('點選建築，或用方向鍵走走。')
const visited = ref(new Set()), player = ref({ x: -1.15, z: 1.55, moving: false }), stick = ref({ x: 0, y: 0 })
const labels = new Map()
const flat = computed(() => flatChoice.value || status.value === 'unavailable')
const station = computed(() => stations[index.value] || stations[0])
const modes = [{ id: 'free', name: '自由漫步' }, { id: 'guided', name: '循序參訪' }, { id: 'safety', name: '禁忌速覽' }]
let engine, disposed = false, pendingVisit = null, activePointer = null, removeMotionListener = () => {}

function showStation(stationId) {
  index.value = stations.findIndex(item => item.id === stationId)
  visited.value = new Set([...visited.value, stationId])
  traveling.value = null
  dialogOpen.value = true
  notice.value = `已抵達${station.value.name}。`
}
function visitStation(next) {
  if (next < 0 || next >= stations.length) return
  listOpen.value = false
  if (dialogOpen.value) { pendingVisit = next; dialogOpen.value = false; return }
  index.value = next
  if (flat.value || !engine) showStation(stations[next].id)
  else { notice.value = `正在走向${stations[next].name}。`; engine.visit(stations[next].id) }
}
async function onDialogClose() {
  dialogOpen.value = false
  engine?.setPaused(false)
  if (pendingVisit !== null) {
    const next = pendingVisit; pendingVisit = null
    await nextTick(); visitStation(next)
  } else root.value?.focus({ preventScroll: true })
}
function changeMode(value) {
  mode.value = value
  engine?.setMode(value)
  if (value === 'guided') visitStation(Math.max(0, index.value))
  if (value === 'safety') visitStation(stations.findIndex(item => item.id === 'guardian'))
  if (value === 'free') notice.value = '點選建築，或用方向鍵走走。'
}
function updateStick(event) {
  if (activePointer !== event.pointerId) return
  const rect = joystickPad.value.getBoundingClientRect()
  let x = (event.clientX - rect.left - rect.width / 2) / 34
  let y = (event.clientY - rect.top - rect.height / 2) / 34
  const length = Math.hypot(x, y)
  if (length > 1) { x /= length; y /= length }
  stick.value = { x: x * 27, y: y * 27 }
  engine?.setJoystick(x, -y)
}
function startStick(event) {
  activePointer = event.pointerId
  joystickPad.value.setPointerCapture(event.pointerId)
  updateStick(event)
}
function stopStick() { activePointer = null; stick.value = { x: 0, y: 0 }; engine?.setJoystick(0, 0) }
watch(flat, value => { stopStick(); engine?.setVisible(!value); if (dialogOpen.value) engine?.setPaused(true) })
watch(lightMode, value => engine?.setLightMode(value))
onMounted(async () => {
  try {
    lightMode.value = window.innerWidth < 760 || (navigator.hardwareConcurrency || 8) <= 4
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)')
    const [T, { createVillageScene }] = await Promise.all([import('../model-graphics.js'), import('./scene.js')])
    if (disposed) return
    engine = createVillageScene(T, host.value, labels, {
      lightMode: lightMode.value, reducedMotion: motion.matches,
      onStation: showStation,
      onMove(value) { player.value = value },
      onTravel(value) { traveling.value = value },
      onNotice(value) { notice.value = value },
      onLightMode(value) { lightMode.value = value; notice.value = '已切換流暢模式，繼續探索吧。' },
      onUnavailable() { status.value = 'unavailable' }
    })
    status.value = 'ready'
    engine.setMode(mode.value)
    engine.setVisible(!flat.value)
    engine.setPaused(dialogOpen.value || flat.value)
    const onMotion = () => engine?.setReducedMotion(motion.matches)
    motion.addEventListener('change', onMotion)
    removeMotionListener = () => motion.removeEventListener('change', onMotion)
  } catch (error) {
    if (!disposed) status.value = 'unavailable'
    console.warn('已切換到可閱讀全部衛教內容的平面地圖。', error)
  }
})
onBeforeUnmount(() => { disposed = true; removeMotionListener(); stopStick(); engine?.dispose(); engine = undefined; labels.clear() })
</script>

<template>
  <main ref="root" class="fascia-village" tabindex="-1" :data-mode="mode" :data-view="flat ? '2d' : '3d'" @keydown.esc="listOpen = false">
    <header class="village-header">
      <a class="village-brand" :href="withBase('/')"><span class="village-brand-icon" aria-hidden="true">✳</span><span><h1>筋膜舒緩村</h1><small>FASCIA CARE VILLAGE</small></span></a>
      <nav class="village-modes" aria-label="探索模式"><button v-for="item in modes" :key="item.id" type="button" :aria-pressed="mode === item.id" @click="changeMode(item.id)">{{ item.name }}</button></nav>
      <div class="village-header-links"><a :href="withBase('/instruction')">使用手冊 ↗</a><button type="button" :aria-expanded="listOpen" :aria-controls="`${id}-stations`" @click="listOpen = !listOpen">☰ <span>站點</span></button></div>
    </header>
    <section class="village-world" :data-player-x="player.x.toFixed(3)" :data-player-z="player.z.toFixed(3)" :data-moving="player.moving" aria-label="筋膜舒緩村互動地圖">
      <div ref="host" class="village-canvas" :class="{ 'village-canvas-hidden': flat }" tabindex="0" role="group" aria-label="3D 村落：拖曳旋轉、右鍵或雙指平移、滾輪縮放；點地面走動，點建築參訪，WASD 或方向鍵移動。">
        <div class="village-labels" :class="{ 'village-labels-loading': status !== 'ready' }"><button v-for="(item, n) in stations" :key="item.id" :ref="element => { if (element) labels.set(item.id, element); else labels.delete(item.id) }" type="button" class="village-label" :class="[{ 'label-active': index === n, 'label-visited': visited.has(item.id) }, `label-${item.theme}`]" :data-station="item.id" :aria-label="`前往${item.name}`" @click="visitStation(n)"><b>{{ String(n + 1).padStart(2, '0') }}</b><span>{{ item.short }}</span><i v-if="visited.has(item.id)" aria-label="已參訪">✓</i></button></div>
      </div>
      <div v-if="flat" class="village-flat-map" aria-label="2D 平面站點地圖">
        <svg viewBox="0 0 800 520" aria-hidden="true"><polygon points="400,28 710,155 710,380 400,505 90,380 90,155" fill="#c2d1a2" stroke="#a4b78d" stroke-width="12"/><ellipse cx="400" cy="265" rx="227" ry="155" fill="none" stroke="#f2e6c7" stroke-width="24"/><path d="M400 80v360M190 195l420 160M190 355l420-160" fill="none" stroke="#f0e4c5" stroke-width="16"/><circle cx="400" cy="265" r="52" fill="#739f69"/><circle cx="388" cy="250" r="32" fill="#98b47b"/></svg>
        <button v-for="(item, n) in stations" :key="item.id" type="button" class="village-flat-station" :class="`flat-${item.theme}`" :style="{ left: `${item.map[0]}%`, top: `${item.map[1]}%` }" @click="visitStation(n)"><span aria-hidden="true">{{ item.icon }}</span><strong>{{ n + 1 }} {{ item.short }}</strong><i v-if="visited.has(item.id)" aria-label="已參訪">✓</i></button>
      </div>
      <div v-if="status === 'loading' && !flat" class="village-loading" role="status"><span class="loading-ring" />正在打開筋膜舒緩村…<button type="button" @click="flatChoice = true">先看平面地圖</button></div>
      <aside class="village-welcome"><span>{{ flat ? '平面探索' : '七站，一起學會安心放鬆' }}</span><h2>{{ mode === 'safety' ? '先學會，哪些不能打。' : mode === 'guided' ? '跟著步道，一站一站學。' : '慢慢走，輕輕鬆。' }}</h2><p>{{ flat ? '點選站點，一樣能閱讀完整衛教。' : '點建築看重點，點步道讓鬆鬆走過去。' }}</p></aside>
      <details class="village-settings"><summary>⚙ <span>探索設定</span></summary><div><button type="button" :disabled="status !== 'ready'" @click="engine?.resetView()">重設視角</button><button type="button" :disabled="status === 'unavailable'" :aria-pressed="flat" @click="flatChoice = !flatChoice">{{ status === 'unavailable' ? '已使用平面地圖' : flat ? '返回 3D 村落' : '切換平面地圖' }}</button><label><input v-model="lightMode" type="checkbox">流暢模式<span>減少陰影與畫面負擔</span></label><a :href="withBase('/body-guide')">3D 人體地圖 ↗</a></div></details>
      <nav v-if="listOpen" :id="`${id}-stations`" class="village-station-menu" aria-label="七站參訪清單"><header><strong>想先去哪一站？</strong><button type="button" aria-label="關閉站點清單" @click="listOpen = false">×</button></header><button v-for="(item, n) in stations" :key="item.id" type="button" @click="visitStation(n)"><b>{{ String(n + 1).padStart(2, '0') }}</b><span><strong>{{ item.name }}</strong><small>{{ item.topic }}</small></span><i v-if="visited.has(item.id)">✓</i><i v-else>↗</i></button></nav>
      <div v-if="!flat && status === 'ready'" class="village-world-tools"><button type="button" aria-label="縮小村落" @click="engine?.zoom(.85)">−</button><button type="button" aria-label="放大村落" @click="engine?.zoom(1.15)">＋</button><button type="button" aria-label="重設村落視角" @click="engine?.resetView()">↺</button></div>
      <div v-if="!flat && mode === 'free' && status === 'ready'" class="village-joystick-wrap"><button ref="joystickPad" type="button" class="village-joystick" aria-label="虛擬搖桿：拖曳控制鬆鬆行走" @pointerdown.prevent="startStick" @pointermove.prevent="updateStick" @pointerup="stopStick" @pointercancel="stopStick" @lostpointercapture="stopStick"><span :style="{ transform: `translate(${stick.x}px, ${stick.y}px)` }" /></button><span>拖曳走走</span></div>
      <span class="village-keyboard-hint" v-if="!flat">W A S D ／方向鍵走動 · 拖曳轉視角</span>
    </section>
    <footer class="village-guide-bar" aria-label="逐站導覽"><button type="button" class="village-guide-prev" :disabled="index <= 0 || !!traveling" @click="visitStation(index - 1)">← <span>上一站</span></button><div class="village-guide-current"><span>{{ traveling ? '鬆鬆正在前往…' : index < 0 ? '準備入村' : `第 ${index + 1} 站 / 7` }}<i>{{ visited.size }} / 7 已參訪</i></span><strong>{{ index < 0 ? '你的放鬆小旅行，從這裡開始。' : station.name }}</strong><small>{{ index < 0 ? '也可以直接點建築，自由探索。' : station.topic }}</small></div><button type="button" class="village-primary village-guide-next" :disabled="index === stations.length - 1 || !!traveling" @click="visitStation(index + 1)">{{ index < 0 ? '開始參訪' : index === stations.length - 1 ? '已到終點' : '下一站' }} <span>→</span></button></footer>
    <p class="village-medical-note">衛教參考資訊，不能取代醫療診斷。<a :href="withBase('/instruction#safety')">使用前先看安全禁忌</a></p>
    <div class="village-sr-only" aria-live="polite" role="status">{{ notice }}</div>
    <VillageDialog :station="station" :open="dialogOpen" :index="Math.max(0, index)" :total="stations.length" @close="onDialogClose" @navigate="visitStation" />
  </main>
</template>
