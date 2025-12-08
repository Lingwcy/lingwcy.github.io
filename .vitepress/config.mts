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
      { text: 'Vite', items: [
        { text: '面经', link: '/docs/vite/面经.md' },
      ] },
      { text: 'JavaSrcipt', items:[
        {text:"高级", link:'/docs/js/高级概念.md'},
        {text:"网络", link:'/docs/js/网络.md'}
      ] },
      { text: 'TypeScript', items:[
        {text:"基础", link:'/docs/ts/基础.md'},
      ] },
      { text: 'Vue', link: '/markdown-examples' },
      { text: 'React',
        items: [
          { text: '面经', link: '/docs/react/面试.md'},
          { text: 'jsx', link: '/docs/react/JSX.md'},
          { text: 'hooks', items: [
            { text: 'useState', link: '/docs/react/useState.md' },
            { text: 'useEffect', link: '/docs/react/useEffect.md' },
          ] },
          { text: 'Fiber', link: '/docs/react/high/Fiber.md' },
          { text: '虚拟Dom', link: '/docs/react/high/虚拟dom.md' },
        ]
       },
      { text: 'Next.js', link: '/markdown-examples' },
      { text: '题库', link: '/markdown-examples' },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Lingwcy' }
    ]
  }
})
