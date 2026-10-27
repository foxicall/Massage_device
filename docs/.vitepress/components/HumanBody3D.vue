<script setup>
import { computed, onBeforeUnmount, onMounted, ref, useId, watch } from 'vue'
import { useData, withBase } from 'vitepress'
import { bodyZones } from './human-body-zones.js'
import './human-body.css'

const { isDark } = useData()
const id = useId()
const viewport = ref(null)
const status = ref('loading')
const selectedId = ref('quads')
const filter = ref('all')
const view = ref('front')
const running = ref(false)
const selectedZone = computed(() => bodyZones.find((zone) => zone.id === selectedId.value))
const visibleZones = computed(() => bodyZones.filter((zone) => filter.value === 'all' || zone.kind === filter.value))
const pinEntries = bodyZones.flatMap((zone) => zone.pins.map((_, index) => ({
  key: `${zone.id}-${index}`, zone, index
})))
const pinElements = new Map()
let engine
let disposed = false
let removeMotionListener = () => {}

function selectZone(zone) {
  selectedId.value = zone.id
  if (filter.value !== 'all' && filter.value !== zone.kind) filter.value = zone.kind
  if (engine) engine.setView(zone.view)
  else view.value = zone.view
}
function setFilter(value) {
  filter.value = value
  if (value !== 'all' && selectedZone.value.kind !== value) {
    selectZone(bodyZones.find((zone) => zone.kind === value))
  }
}
function setView(value) { engine?.setView(value) }
watch([selectedId, filter], () => engine?.updateSelection(selectedId.value, filter.value))
watch(isDark, (value) => engine?.updateTheme(value))

onMounted(async () => {
  try {
    const [THREE, { createHumanBodyScene }] = await Promise.all([
      import('./model-graphics.js'), import('./human-body-scene.js')
    ])
    if (disposed || !viewport.value) return
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)')
    engine = createHumanBodyScene(THREE, viewport.value, pinElements, {
      dark: isDark.value,
      reducedMotion: motion.matches,
      onViewChange(value) { view.value = value },
      onRunningChange(value) { running.value = value },
      onUnavailable() { status.value = 'unavailable' }
    })
    // Apply any selection made while the graphics bundle was loading.
    engine.updateSelection(selectedId.value, filter.value)
    engine.setView(selectedZone.value.view)
    const onMotion = () => engine?.setReducedMotion(motion.matches)
    motion.addEventListener('change', onMotion)
    removeMotionListener = () => motion.removeEventListener('change', onMotion)
    status.value = 'ready'
  } catch (error) {
    if (!disposed) status.value = 'unavailable'
    console.warn('人體 3D 模型無法初始化，部位清單仍可使用。', error)
  }
})

onBeforeUnmount(() => {
  disposed = true
  removeMotionListener()
  engine?.dispose()
  engine = undefined
  pinElements.clear()
})
</script>

<template>
  <section class="human-body" :data-running="running" :aria-labelledby="`${id}-title`">
    <header class="human-header">
      <div><span class="section-eyebrow">INTERACTIVE BODY ATLAS</span><h2 :id="`${id}-title`">你的身體，有哪些使用界線？</h2></div>
      <div class="human-legend" aria-label="點位圖例"><span><i class="legend-muscle" />肌群參考區</span><span><i class="legend-danger" />禁止施打區</span></div>
    </header>
    <div class="human-layout">
      <div class="human-stage">
        <div class="human-view-controls" role="group" aria-label="人體視角">
          <button v-for="preset in [{ id: 'front', label: '正面' }, { id: 'back', label: '背面' }, { id: 'sole', label: '足底' }]" :key="preset.id" type="button" :aria-pressed="view === preset.id" :disabled="status !== 'ready'" @click="setView(preset.id)">{{ preset.label }}</button>
        </div>
        <span class="human-view-label">{{ { front: 'ANTERIOR / 正面', back: 'POSTERIOR / 背面', sole: 'PLANTAR / 足底', custom: 'FREE VIEW / 自由視角' }[view] }}</span>
        <div
          ref="viewport" class="human-viewport" :class="{ 'human-unavailable': status === 'unavailable' }"
          tabindex="0" role="group" aria-label="人體 3D 檢視區。拖曳旋轉、右鍵拖曳平移、滾輪或雙指縮放平移。左右鍵旋轉，上下鍵平移，加減鍵縮放。"
          @keydown.left.prevent="engine?.orbit(-1)" @keydown.right.prevent="engine?.orbit(1)"
          @keydown.up.prevent="engine?.pan(0, .15)" @keydown.down.prevent="engine?.pan(0, -.15)"
          @keydown.+.prevent="engine?.zoom(.85)" @keydown.-.prevent="engine?.zoom(1.15)"
        >
          <div class="human-pins" :class="{ 'human-pins-loading': status !== 'ready' }">
            <button
              v-for="entry in pinEntries" :key="entry.key"
              :ref="(element) => { if (element) pinElements.set(entry.key, element); else pinElements.delete(entry.key) }"
              type="button" class="human-pin" :class="[`pin-${entry.zone.kind}`, { 'pin-selected': selectedId === entry.zone.id }]"
              :data-zone="entry.zone.id" :data-pin="entry.key" :aria-pressed="selectedId === entry.zone.id"
              :aria-label="`${entry.zone.name}，${entry.zone.kind === 'danger' ? '禁止施打' : '肌群參考區'}，點位 ${entry.index + 1}`"
              @click.stop="selectZone(entry.zone)"
            ><span class="pin-number">{{ entry.zone.kind === 'danger' ? '!' : entry.zone.number }}</span><span class="pin-label">{{ entry.zone.short }}</span></button>
          </div>
        </div>
        <div v-if="status !== 'ready'" class="human-fallback" role="status">
          <template v-if="status === 'loading'"><span class="loading-ring" />正在準備人體模型…</template>
          <template v-else><strong>此瀏覽器無法顯示 WebGL 人體模型</strong><span>仍可使用部位清單，閱讀所有肌群與禁忌說明。</span></template>
        </div>
        <div class="human-navigation" role="group" aria-label="人體模型操作">
          <button type="button" aria-label="向左旋轉人體" :disabled="status !== 'ready'" @click="engine?.orbit(-1)">↶</button>
          <button type="button" aria-label="向右旋轉人體" :disabled="status !== 'ready'" @click="engine?.orbit(1)">↷</button>
          <button type="button" aria-label="縮小人體" :disabled="status !== 'ready'" @click="engine?.zoom(1.15)">−</button>
          <button type="button" aria-label="放大人體" :disabled="status !== 'ready'" @click="engine?.zoom(.85)">＋</button>
          <button type="button" aria-label="向左平移人體" :disabled="status !== 'ready'" @click="engine?.pan(-.2, 0)">←</button>
          <button type="button" aria-label="向右平移人體" :disabled="status !== 'ready'" @click="engine?.pan(.2, 0)">→</button>
          <button type="button" :disabled="status !== 'ready'" @click="setView('front')">重設</button>
        </div>
        <p class="human-gesture">單指旋轉 · 雙指縮放／平移<br>滑鼠右鍵平移 · 點選標記查看說明</p>
      </div>
      <div class="human-panel">
        <div class="human-selection" :class="`selection-${selectedZone.kind}`" aria-live="polite" aria-atomic="true">
          <span class="human-selection-kind">{{ selectedZone.kind === 'danger' ? '禁止施打 · DO NOT APPLY' : '肌群參考 · MUSCLE REFERENCE' }}</span>
          <h3>{{ selectedZone.name }}</h3>
          <p>{{ selectedZone.description }}</p>
          <dl v-if="selectedZone.kind === 'muscle'" class="human-parameters">
            <div><dt>配件參考</dt><dd>{{ selectedZone.heads }}</dd></div>
            <div><dt>原案檔位</dt><dd>{{ selectedZone.intensity }}</dd></div>
          </dl>
          <div v-else class="human-no-settings">此區域不提供槍頭或強度建議。</div>
          <p class="human-technique">{{ selectedZone.technique }}</p>
        </div>
        <div class="human-list-heading"><strong>選擇你想了解的部位</strong><span>14 個區域</span></div>
        <div class="human-filters" role="group" aria-label="部位分類">
          <button v-for="option in [{ id: 'all', label: '全部' }, { id: 'muscle', label: '肌群參考' }, { id: 'danger', label: '禁止施打' }]" :key="option.id" type="button" :aria-pressed="filter === option.id" @click="setFilter(option.id)">{{ option.label }}<span>{{ option.id === 'all' ? 14 : 7 }}</span></button>
        </div>
        <div class="human-zone-list" role="group" aria-label="人體部位清單">
          <button v-for="zone in visibleZones" :key="zone.id" type="button" :class="[{ 'zone-active': selectedId === zone.id }, `zone-${zone.kind}`]" :aria-pressed="selectedId === zone.id" @click="selectZone(zone)"><span class="zone-symbol">{{ zone.kind === 'danger' ? '!' : zone.number }}</span><span>{{ zone.short }}</span><span class="zone-arrow" aria-hidden="true">↗</span></button>
        </div>
      </div>
    </div>
    <footer class="human-disclaimer"><strong>辨識位置，不代表使用許可。</strong>綠色只標示肌群位置，未標記處也不代表安全。檔位沒有跨機型標準，均應由最低檔輕觸開始；3D 模型不是精準解剖定位或診療工具。<a :href="withBase('/instruction#safety')">閱讀完整安全禁忌 →</a></footer>
  </section>
</template>
