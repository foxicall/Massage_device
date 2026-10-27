import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { createMarkdownRenderer, defineConfig } from 'vitepress'

const docsDir = fileURLToPath(new URL('../', import.meta.url))
const guideFile = fileURLToPath(new URL('../instruction.md', import.meta.url))
// Keep local development at /; project-site hosting can supply /Massage_device/.
const base = process.env.VITEPRESS_BASE || '/'

export default defineConfig(async () => {
  // Use VitePress's own parser so duplicate headings and custom IDs match the page.
  const markdown = await createMarkdownRenderer(docsDir, { headers: { level: [2, 3, 4] } })
  const env = {}
  markdown.render(readFileSync(guideFile, 'utf8'), env)
  const sidebarItem = (header) => ({
    text: header.title,
    link: `/instruction${header.link}`,
    ...(header.children.length
      ? { collapsed: true, items: header.children.map(sidebarItem) }
      : {})
  })

  return {
    base,
    lang: 'zh-TW',
    title: '筋膜槍使用全攻略與衛教手冊',
    description: '從按摩頭選擇到分部位操作，用清楚易懂的教學，建立安全、自在的日常放鬆習慣。',
    cleanUrls: true,
    head: [
      ['link', { rel: 'icon', type: 'image/svg+xml', href: `${base}favicon.svg` }],
      ['meta', { name: 'theme-color', content: '#087f75' }]
    ],
    markdown: { headers: { level: [2, 3, 4] } },
    themeConfig: {
      logo: '/favicon.svg',
      siteTitle: '筋膜槍衛教指南',
      nav: [
        { text: '首頁', link: '/', activeMatch: '^/$' },
        { text: '3D 人體導覽', link: '/body-guide' },
        { text: '使用指南 / 實戰教學', link: '/instruction' },
        { text: '安全禁忌', link: '/instruction#safety' },
        { text: 'FAQ', link: '/instruction#faq' }
      ],
      sidebar: {
        '/instruction': [
          { text: '完整使用指南', link: '/instruction', items: (env.headers ?? []).map(sidebarItem) }
        ]
      },
      outline: { level: [2, 4], label: '本頁章節' },
      search: {
        provider: 'local',
        options: {
          locales: {
            root: {
              translations: {
                button: { buttonText: '搜尋指南', buttonAriaLabel: '搜尋教學指南' },
                modal: {
                  displayDetails: '顯示詳細內容',
                  resetButtonTitle: '清除搜尋',
                  backButtonTitle: '返回搜尋',
                  noResultsText: '找不到相關內容',
                  footer: { selectText: '選擇', navigateText: '切換', closeText: '關閉' }
                }
              }
            }
          }
        }
      },
      docFooter: { prev: '上一篇', next: '下一篇' },
      darkModeSwitchLabel: '外觀',
      lightModeSwitchTitle: '切換為淺色模式',
      darkModeSwitchTitle: '切換為深色模式',
      sidebarMenuLabel: '章節目錄',
      skipToContentLabel: '跳至主要內容',
      returnToTopLabel: '回到頂端',
      notFound: {
        title: '找不到這個頁面',
        quote: '回到首頁，繼續探索安心放鬆的方法。',
        linkLabel: '返回首頁',
        linkText: '返回首頁'
      },
      footer: {
        message: '健康衛教參考資訊，不能取代專業醫療診斷與治療。',
        copyright: '© 2026 筋膜槍使用與衛教指南'
      }
    },
    vite: {
      build: {
        rollupOptions: {
          output: {
            manualChunks(id) {
              // Cache the graphics core independently from the WebGL renderer.
              if (id.endsWith('/three.core.js')) return 'three-core'
            }
          }
        }
      },
      plugins: [{
        name: 'refresh-guide-sidebar',
        async handleHotUpdate({ file, server }) {
          if (file === guideFile) {
            await server.restart()
            return []
          }
        }
      }]
    }
  }
})
