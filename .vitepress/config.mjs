import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "zh-CN",
  title: "前端小林",
  description: "A VitePress Site",
  base: '/vite-docs/',
  head: [
    ['link', { rel: 'icon', href: '/vite-docs/assets/img/favicon.ico' }],
    ['link', { rel: 'icon', href: '/vite-docs/assets/img/vitepress-logo-mini.svg' }]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/assets/img/vitepress-logo-mini.svg',
    search: {
      provider: 'local'
    },

    nav: [
      { text: '首页', link: '/' },
      { text: 'Demo', link: '/views/demo/eleme' },
      { text: '学习笔记', link: '/views/learningNotes/git' },
      {
        text: '前端',
        items: [
          { text: '前端进阶之旅', link: 'https://interview.poetries.top/' },
          { text: '前端面试题汇总', link: 'https://www.yuque.com/cuggz/interview' },
          { text: '前端知识进阶', link: 'https://www.yuque.com/cuggz/feplus' },
        ]
      },
    ],

    sidebar: [
      {
        text: '示例',
        collapsed: false,
        items: [
          { text: 'Markdown 示例', link: '/views/examples/markdown-examples' },
          { text: '运行时 API 示例', link: '/views/examples/api-examples' }
        ]
      },
      {
        text: 'Demo 演示',
        collapsed: false,
        items: [
          { text: '饿了么', link: '/views/demo/eleme' },
          { text: '数据可视化', link: '/views/demo/echarts' },
          { text: 'uniapp 商城', link: '/views/demo/uniapp-shop' },
          { text: '电商后台管理', link: '/views/demo/vue2-shop-admin' },
          { text: '京东商城', link: '/views/demo/JD-Mall' },
          { text: '待办事项清单', link: '/views/demo/todo-list' }
        ]
      },
      {
        text: '学习笔记',
        collapsed: false,
        items: [
          { text: 'Git 常用命令', link: '/views/learningNotes/git' },
          { text: 'Linux 常用命令', link: '/views/learningNotes/linux' }
        ]
      },
      {
        text: '面试题',
        collapsed: false,
        items: [
          { text: '前端面试题', link: '/views/interviewQuestions/interview-questions' },
          { text: '模拟面试', link: '/views/interviewQuestions/simulated-interview' }
        ]
      },
      {
        text: '资源分享',
        collapsed: false,
        items: [
          { text: '项目案例', link: '/views/resourceSharing/resource-sharing' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present Haven Lin'
    }
  }
})
