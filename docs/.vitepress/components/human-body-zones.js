// Coordinates are schematic landmarks, not clinical or anatomically precise targets.
const pin = (position, face = 'front') => ({
  position,
  normal: face === 'back' ? [0, 0, -1] : face === 'sole' ? [0, -1, 0] : [0, 0, 1]
})
const pair = (x, y, z, face = 'front') => [pin([-x, y, z], face), pin([x, y, z], face)]

export const bodyZones = [
  {
    id: 'trapezius', number: '01', kind: 'muscle', name: '上斜方肌／肩頸外側', short: '肩部外側', view: 'back',
    heads: '平扁頭／氣墊頭', intensity: '1–2 檔低速（原案參考）',
    description: '僅辨識肩部外側較厚的肌肉；不要向內移到頸部、鎖骨或肩峰。',
    technique: '從最低檔輕觸、緩慢滑動。難以確認位置時，請先由醫療專業人員指導。',
    pins: [...pair(.46, 1.53, .2), ...pair(.46, 1.53, -.2, 'back')]
  },
  {
    id: 'back', number: '02', kind: 'muscle', name: '闊背肌／胸椎兩側豎脊肌', short: '背部兩側', view: 'back',
    heads: '雙叉／U 型頭或球型頭', intensity: '2–3 檔中速（原案參考）',
    description: '標記位於背部肌肉兩側，並非脊椎正中線；同時避開肩胛骨、肋骨與後腰腎臟區。',
    technique: '從低檔輕觸開始。U 型的空隙不保證能避開骨頭，不要讓雙叉直接撞擊骨突。',
    pins: [...pair(.35, 1.03, -.3, 'back'), ...pair(.15, .73, -.26, 'back')]
  },
  {
    id: 'glutes', number: '03', kind: 'muscle', name: '臀大肌／臀中肌', short: '臀部肌群', view: 'back',
    heads: '大球型頭；錐形／子彈頭須審慎評估', intensity: '3–4 檔中高強度（原案參考）',
    description: '只辨識臀部厚實肌肉，避開髖部骨突及任何會引發放射痛或麻木的位置。',
    technique: '仍從最低檔輕觸開始，不以深層釋放為由硬壓或加強。尖頭接觸面積小，應先諮詢專業人員。',
    pins: pair(.23, .06, -.3, 'back')
  },
  {
    id: 'quads', number: '04', kind: 'muscle', name: '股四頭肌／大腿前側', short: '大腿前側', view: 'front',
    heads: '大球型頭或平扁頭', intensity: '3–4 檔（原案參考）',
    description: '辨識大腿前側肌腹，與膝蓋髕骨及大腿根部的腹股溝保持距離。',
    technique: '從低檔輕觸、順著肌肉方向緩慢滑動，不在同一點重壓或追求疼痛感。',
    pins: pair(.27, -.43, .26)
  },
  {
    id: 'hamstrings', number: '05', kind: 'muscle', name: '大腿後側膕繩肌', short: '大腿後側', view: 'back',
    heads: '球型頭', intensity: '2–3 檔（原案參考）',
    description: '辨識大腿後側肌腹；膝窩有重要神經與血管，不要向下滑入膝窩。',
    technique: '從最低檔開始，腿部放鬆後輕觸滑動；出現刺痛、麻木或放射感即停止。',
    pins: pair(.27, -.45, -.26, 'back')
  },
  {
    id: 'calves', number: '06', kind: 'muscle', name: '小腿腓腸肌／比目魚肌', short: '小腿肌群', view: 'back',
    heads: '氣墊頭或小球型頭', intensity: '1–2 檔低速（原案參考）',
    description: '標記為小腿後側肌腹。避開膝窩、脛骨、跟腱本體及踝關節骨突。',
    technique: '最低檔輕觸滑動。若小腿單側突然腫脹、發熱或疼痛，請勿按摩，應先就醫評估。',
    pins: pair(.3, -1.61, -.17, 'back')
  },
  {
    id: 'sole', number: '07', kind: 'muscle', name: '足底筋膜', short: '足底', view: 'sole',
    heads: '小球頭；圓錐／子彈頭須審慎評估', intensity: '1 檔極低速（原案參考）',
    description: '切換足底視角辨識位置，避開腳跟骨突、傷口及疼痛或發炎處。',
    technique: '僅輕觸，不以尖頭硬壓。原案每點不超過 15 秒並非安全保證；有不適立即停止。',
    pins: pair(.31, -2.44, .14, 'sole')
  },
  {
    id: 'neck', number: '08', kind: 'danger', name: '頸前／頸動脈三角區', short: '頸部前側', view: 'front',
    description: '頸動脈、迷走神經及其他重要神經血管密集，衝擊可能造成血管或神經損傷。',
    technique: '禁止施打頸部前側與側面。不要用低檔或軟頭作為例外。',
    pins: [pin([0, 1.79, .15])]
  },
  {
    id: 'axilla', number: '09', kind: 'danger', name: '腋下', short: '腋下神經血管區', view: 'front',
    description: '腋下有臂神經叢、主要血管及淋巴組織，並非適合用筋膜槍敲擊的肌腹。',
    technique: '禁止伸入腋下或朝腋下重壓，也不要用尖頭尋找痠痛點。',
    pins: pair(.62, 1.16, .12)
  },
  {
    id: 'elbows', number: '10', kind: 'danger', name: '手肘內側', short: '手肘內側', view: 'front',
    description: '手肘內側與肘窩有表淺神經及主要血管，關節與骨突也缺乏厚實肌肉緩衝。',
    technique: '禁止施打肘窩、手肘內側與骨突，不以麻電感當作放鬆效果。',
    pins: pair(.85, .58, .14)
  },
  {
    id: 'spine', number: '11', kind: 'danger', name: '脊椎正中線骨突處', short: '脊椎正中線', view: 'back',
    description: '頸椎、胸椎與腰椎的正中骨突，不是供筋膜槍直接撞擊的軟組織。',
    technique: '禁止沿正中線施打。U 型按摩頭並不保證安全，仍須避開所有骨頭。',
    pins: [pin([0, 1.3, -.31], 'back'), pin([0, .8, -.26], 'back'), pin([0, .36, -.27], 'back')]
  },
  {
    id: 'knees', number: '12', kind: 'danger', name: '膝蓋髕骨', short: '膝蓋骨／髕骨', view: 'front',
    description: '髕骨與膝關節表面不是肌腹，直接敲擊可能刺激骨膜或損傷周圍組織。',
    technique: '禁止直接施打膝蓋骨、關節線及膝窩。按摩大腿時也不要滑過膝蓋。',
    pins: pair(.28, -1.06, .16)
  },
  {
    id: 'wrists', number: '13', kind: 'danger', name: '手腕關節', short: '手腕關節', view: 'front',
    description: '手腕骨骼、肌腱、神經及血管密集，肌肉緩衝層薄。',
    technique: '禁止直接施打手腕及骨突。前臂肌腹與手腕關節必須分清楚。',
    pins: pair(1.055, -.13, .09)
  },
  {
    id: 'groin', number: '14', kind: 'danger', name: '鼠蹊部／腹股溝', short: '腹股溝', view: 'front',
    description: '大腿根部內側有股動脈、股神經、靜脈及淋巴組織，應避免任何衝擊。',
    technique: '禁止施打腹股溝或用按摩頭深入大腿根部內側。',
    pins: pair(.19, .04, .28)
  }
]

// Surface patches make the selected region visible without claiming precise anatomy.
// Each entry is [x, y, z, scaleX, scaleY, scaleZ].
const mirrored = (x, ...values) => [[-x, ...values], [x, ...values]]
export const zonePatches = {
  trapezius: mirrored(.4, 1.54, 0, .23, .12, .22),
  back: [...mirrored(.35, 1.03, -.24, .16, .33, .07), ...mirrored(.15, .77, -.23, .055, .34, .055)],
  glutes: mirrored(.22, .07, -.22, .19, .24, .1),
  quads: mirrored(.27, -.43, .16, .17, .43, .12),
  hamstrings: mirrored(.27, -.45, -.16, .17, .43, .12),
  calves: mirrored(.3, -1.61, -.1, .115, .34, .09),
  sole: mirrored(.31, -2.44, .14, .1, .018, .2),
  neck: [[0, 1.79, .115, .1, .12, .04]],
  axilla: mirrored(.62, 1.16, .05, .09, .15, .11),
  elbows: mirrored(.85, .58, .08, .1, .1, .085),
  spine: [[0, 1.23, -.28, .035, .35, .045], [0, .63, -.24, .035, .36, .04]],
  knees: mirrored(.28, -1.06, .12, .12, .13, .065),
  wrists: mirrored(1.055, -.13, 0, .08, .06, .1),
  groin: mirrored(.19, .04, .23, .095, .14, .065)
}
