# 筋膜槍使用與衛教指南

使用 VitePress、Vue 3 與 Three.js 建立的繁體中文教學網站，教學內容位於 `docs/instruction.md`。

## 開發

需要 Node.js 20.19+（Node 22 請使用 22.12+；已驗證 Node 24）與 npm。

```sh
npm ci
npm run dev
```

開發伺服器預設使用 5173 埠。遠端容器可使用 `npm run dev -- --host 0.0.0.0`，並透過開發平台提供的連線方式存取。

```sh
npm run build
npm run preview -- --host 0.0.0.0
```

靜態網站輸出至 `docs/.vitepress/dist/`。部署於子目錄時，請透過 `VITEPRESS_BASE` 設定對應路徑；本機開發預設仍為 `/`。

例如，發布至 GitHub Pages 的 `/Massage_device/` 路徑：

```sh
VITEPRESS_BASE=/Massage_device/ npm run build
VITEPRESS_BASE=/Massage_device/ npm run preview -- --host 0.0.0.0 --port 4173
```

## 內容與導覽

- `docs/index.md`：官方 Hero、特色卡片與閱讀路線。
- `docs/instruction.md`：六大單元的完整教學；請使用小寫檔名。
- `docs/.vitepress/config.js`：繁體中文介面、本地搜尋與導覽。側邊欄使用 VitePress Markdown 解析器讀取二至四級標題，自動對應實際錨點；開發時修改指南會重啟伺服器更新目錄。
- `docs/.vitepress/theme/Layout.vue`：透過官方 `home-hero-after` 插槽在首頁 Hero 下方嵌入 3D 模型。

## 3D 組件

`docs/.vitepress/components/InteractiveModel.vue` 已全域註冊，可在任何 Markdown 頁面使用：

```vue
<ClientOnly>
  <InteractiveModel />
</ClientOnly>
```

模型由原生幾何體組成，不需外部模型或材質。支援拖曳旋轉、滾輪／雙指縮放、三種按摩頭切換、暫停自動旋轉與視角重設。亦可聚焦檢視區，使用左右方向鍵旋轉、加減鍵縮放，或使用縮放按鈕。

Three.js 與 OrbitControls 僅於 `onMounted` 動態載入；離開頁面會清除動畫、事件、觀察器及 GPU 資源。尊重減少動態效果偏好，離開可視區或背景分頁會暫停動畫。需要支援 WebGL 的瀏覽器；不支援時顯示替代說明，仍可閱讀配件資訊。模型為結構示意，不代表實際操作方式。

教學資訊不取代專業醫療診斷或治療，實際使用前請閱讀安全禁忌與產品說明。
