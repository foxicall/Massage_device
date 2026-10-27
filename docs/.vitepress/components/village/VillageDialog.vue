<script setup>
import { computed, nextTick, onBeforeUnmount, onMounted, ref, useId, watch } from 'vue'
import { withBase } from 'vitepress'
import { massageHeads } from './stations.js'

const props = defineProps({ station: Object, open: Boolean, index: Number, total: Number })
const emit = defineEmits(['close', 'navigate'])
const id = useId(), dialog = ref(null), tab = ref(0), head = ref('ball')
const speechAvailable = ref(false), speaking = ref(false), speechNotice = ref('')
const content = computed(() => props.station.tabs[tab.value] || props.station.tabs[0])
const selectedHead = computed(() => massageHeads.find(item => item.id === head.value))
let synth, Utterance, utterance

function stopSpeech() {
  if (utterance) synth?.cancel()
  utterance = undefined
  speaking.value = false
}
function close() { dialog.value?.close() }
function changeTab(index) { stopSpeech(); tab.value = index; speechNotice.value = '' }
function tabKey(event, index) {
  let target = index
  if (event.key === 'ArrowRight') target = (index + 1) % props.station.tabs.length
  else if (event.key === 'ArrowLeft') target = (index + props.station.tabs.length - 1) % props.station.tabs.length
  else if (event.key === 'Home') target = 0
  else if (event.key === 'End') target = props.station.tabs.length - 1
  else return
  event.preventDefault(); changeTab(target)
  dialog.value.querySelectorAll('[role="tab"]')[target]?.focus()
}
function readAloud() {
  if (speaking.value) { stopSpeech(); return }
  if (!synth || !Utterance) return
  const page = content.value
  const text = [props.station.name, page.title, page.lead, ...(page.steps || []), ...(page.tags || []), ...(page.faqs || []).flatMap(item => [item.question, item.answer]), page.type === 'heads' ? `${selectedHead.value.name}。${selectedHead.value.use}。${selectedHead.value.caution}` : '', page.note].filter(Boolean).join('。')
  utterance = new Utterance(text)
  utterance.lang = 'zh-TW'
  utterance.rate = .93
  const voice = synth.getVoices().find(item => item.lang === 'zh-TW')
  if (voice) utterance.voice = voice
  utterance.onend = () => { speaking.value = false; utterance = undefined }
  utterance.onerror = () => { speaking.value = false; utterance = undefined; speechNotice.value = '此裝置暫時無法朗讀，仍可閱讀下方重點。' }
  speaking.value = true
  synth.speak(utterance)
}
watch(() => props.station.id, () => { stopSpeech(); tab.value = 0; head.value = 'ball' })
watch(() => props.open, async value => {
  await nextTick()
  if (value && dialog.value && !dialog.value.open) dialog.value.showModal()
  if (!value && dialog.value?.open) dialog.value.close()
})
onMounted(() => {
  synth = window.speechSynthesis
  Utterance = window.SpeechSynthesisUtterance
  speechAvailable.value = !!(synth && Utterance)
  if (props.open) dialog.value.showModal()
})
onBeforeUnmount(stopSpeech)
</script>

<template>
  <dialog ref="dialog" class="village-dialog" :class="{ 'dialog-danger': station.danger }" :aria-labelledby="`${id}-title`" @close="stopSpeech(); emit('close')" @click="event => { if (event.target === dialog) close() }">
    <div class="village-dialog-header">
      <span class="village-dialog-icon" aria-hidden="true">{{ station.icon }}</span>
      <div><span class="village-dialog-kicker">第 {{ index + 1 }} 站 · {{ station.topic }}</span><h2 :id="`${id}-title`">{{ station.name }}</h2></div>
      <button type="button" class="village-dialog-close" aria-label="關閉衛教視窗" @click="close">×</button>
    </div>
    <div class="village-dialog-tabs" role="tablist" :aria-label="`${station.name}衛教分頁`">
      <button v-for="(page, index) in station.tabs" :id="`${id}-tab-${index}`" :key="page.title" type="button" role="tab" :aria-selected="tab === index" :aria-controls="`${id}-panel`" :tabindex="tab === index ? 0 : -1" @click="changeTab(index)" @keydown="tabKey($event, index)">{{ page.title }}</button>
    </div>
    <section :id="`${id}-panel`" class="village-dialog-body" role="tabpanel" :aria-labelledby="`${id}-tab-${tab}`" tabindex="0">
      <p class="village-dialog-lead">{{ content.lead }}</p>
      <template v-if="content.type === 'heads'">
        <div class="village-heads" role="group" aria-label="選擇按摩頭">
          <button v-for="item in massageHeads" :key="item.id" type="button" :aria-pressed="head === item.id" @click="head = item.id; stopSpeech()"><span aria-hidden="true">{{ item.shape }}</span>{{ item.name }}</button>
        </div>
        <div class="village-head-detail" aria-live="polite"><strong>{{ selectedHead.name }}</strong><p>{{ selectedHead.use }}</p><small>{{ selectedHead.caution }}</small><a :href="withBase('/overview')">查看 3D 器材圖鑑 ↗</a></div>
      </template>
      <ol v-if="content.steps" class="village-steps"><li v-for="(step, index) in content.steps" :key="step"><span aria-hidden="true">{{ index + 1 }}</span><p>{{ step }}</p></li></ol>
      <ul v-if="content.tags" class="village-danger-tags"><li v-for="tag in content.tags" :key="tag"><span aria-hidden="true">!</span>{{ tag }}</li></ul>
      <div v-if="content.faqs" class="village-faqs"><details v-for="item in content.faqs" :key="item.question"><summary>{{ item.question }}</summary><p>{{ item.answer }}</p></details></div>
      <div v-if="content.meter" class="village-force" role="img" aria-label="從最低檔開始，不同機型檔位無法直接對照"><div><strong>力道，從輕開始</strong><span class="force-bars" aria-hidden="true"><i v-for="n in 5" :key="n" :class="{ filled: n === 1 }" /></span></div><small>最低檔輕觸；檔位依說明書及個別評估調整。</small></div>
      <p v-if="content.note" class="village-note" :class="{ 'village-note-danger': station.danger }">{{ content.note }}</p>
      <a v-if="content.action" class="village-tab-action" :href="withBase(content.action.link)">{{ content.action.text }} ↗</a>
      <details class="village-takeaway"><summary>記住一件事</summary><p>{{ content.note || content.steps?.at(-1) || content.lead }}</p></details>
    </section>
    <div class="village-dialog-utility"><button type="button" :disabled="!speechAvailable" @click="readAloud">{{ speaking ? '停止朗讀' : '朗讀重點' }}</button><a :href="withBase(station.link)">閱讀完整指南 ↗</a><span v-if="speechNotice" role="status">{{ speechNotice }}</span></div>
    <footer class="village-dialog-footer"><button type="button" :disabled="index <= 0" @click="emit('navigate', index - 1)">← 上一站</button><button type="button" class="village-primary" @click="index < total - 1 ? emit('navigate', index + 1) : close()">{{ index < total - 1 ? '前往下一站 →' : '完成參訪 ✓' }}</button></footer>
  </dialog>
</template>
