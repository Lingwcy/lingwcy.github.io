import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "lingwcy",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '工程化', link: '/docs/工程化/base.md' },
      {
        text: 'Webpack', items: [
          { text: '基础概念', link: '/docs/webpack/base.md' },
          { text: '高级优化', link: '/item-2' },
        ]
      },
      { text: 'Vite', link: '/markdown-examples' },
      { text: 'JavaSrcipt', link: '/markdown-examples' },
      { text: 'TypeScript', link: '/markdown-examples' },
      { text: 'Vue', link: '/markdown-examples' },
      { text: 'React', link: '/markdown-examples' },
      { text: 'Next.js', link: '/markdown-examples' },
      { text: '题库', link: '/markdown-examples' },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Lingwcy' }
    ]
  }
})
