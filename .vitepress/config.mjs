import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "zh-CN",
  title: "前端小林",
  description: "A VitePress Site",
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { rel: 'icon', href: '/vitepress-logo-mini.svg' }]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/vitepress-logo-mini.svg',
    search: {
      provider: 'local'
    },

    nav: [
      { text: '首页', link: '/' },
      { text: '示例', link: '/markdown-examples' },
      { text: '学习笔记', link: '/views/learningNotes/git' },
      {
        text: '前端',
        items: [
          { text: 'HTML5', link: 'https://www.xp.cn/e/html5/' },
          { text: 'CSS3', link: 'https://www.w3cschool.cn/css3/css3-tutorial.html' },
          { text: 'JavaScript(ES6+)', link: 'https://www.w3cschool.cn/escript6/' },
          { text: 'TypeScript', link: 'https://www.typescriptlang.org/' },
          { text: 'Vue(2/3)', link: 'https://cn.vuejs.org/guide/introduction' },
          { text: '公众平台及小程序', link: 'https://developers.weixin.qq.com/miniprogram/dev/framework/' },
          { text: 'Uniapp', link: 'https://uniapp.dcloud.net.cn/' },
          { text: 'Three.js', link: 'https://threejs.org/' }
        ]
      },
      { 
        text: '后端', 
        items: [
          { text: 'Spring Framework', link: 'https://spring.io/projects/spring-framework' },
          { text: 'Spring Boot', link: 'https://spring.io/projects/spring-boot' },
          { text: 'Hibernate', link: 'https://hibernate.org/' },
          { text: 'Maven', link: 'https://maven.apache.org/' },
          { text: 'Java EE', link: 'https://www.oracle.com/java/technologies/java-ee-glance.html' }
        ]
      },
      {
        text: '人工智能',
        items: [
          { text: '机器学习', link: 'https://developers.google.com/machine-learning/crash-course/ml-intro' },
          { text: '深度学习', link: 'http://neuralnetworksanddeeplearning.com/' },
          { text: '自然语言处理', link: 'https://www.nltk.org/' },
          { text: '计算机视觉', link: 'https://opencv.org/' }
        ]
      }
    ],

    sidebar: [
      {
        text: '示例',
        collapsed: false,
        items: [
          { text: 'Markdown 示例', link: '/markdown-examples' },
          { text: '运行时 API 示例', link: '/api-examples' }
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
