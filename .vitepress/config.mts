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
        {text:"原型链", link:'/docs/js/原型链.md'},
        {text:"闭包", link:'/docs/js/闭包.md'},
        {text:"this指向", link:'/docs/js/this指向.md'},
        {text:"浏览器工作", link:'/docs/js/浏览器工作.md'},
        {text:"数组", link:'/docs/js/数组.md'},
        {text:"类数组对象", link:'/docs/js/类数组对象.md'},
        {text:"属性访达性", link:'/docs/js/属性访达性.md'},
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

          { text: 'React Router', items: [
            { text: 'React', link: '/docs/react/useState.md' },
          ] },
        ]
       },
      { text: '浏览器', items:[
        {text: '浏览器缓存机制', link: '/docs/浏览器/浏览器缓存机制.md'},
        {text:"事件循环", link:'/docs/浏览器/事件循环.md'},
        {text:"浏览器工作原理", link:'/docs/浏览器/浏览器工作.md'},
        
      ] },
      { text: '题库', items:[
        {text: '诗悦网络笔试2026', link:'/docs/题库/诗悦网络笔试2026.md'}
      ] },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Lingwcy' }
    ]
  }
})
