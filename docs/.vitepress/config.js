export default {
  title: 'mmqUtils文档',
  description: '函数库、工具类',
  lastUpdated: true,
  base: '/article',
  lang: 'zh-CN',
  head: [['link', {rel: 'icon', type: 'image/png', href: 'logo.svg'}]],
  themeConfig: {
    logo: '/logo.svg',
    nav: [
      {text: '首页', link: '/'},
      {
        text: '指引',
        link: '/guide/quickstart',
      },
      {
        text: '关于我',
        items: [
          {
            text: 'github',
            link: 'https://github.com/tgbf2674',
          }
        ],
      }
    ],
    sidebar: {
      '/guide/': [
        {
          text: '指引',
          collapsible: true,
          items: [
            {
              text: '快速开始',
              link: '/guide/quickstart',
            },
            {
              text: '安装方式',
              link: '/guide/install',
            }
          ],
        },
        {
          text: '函数',
          collapsible: true,
          items: [
            {
              text: '基本方法',
              link: '/guide/base',
            },
            {
              text: '数组方法',
              link: '/guide/array',
            },
          ],
        },
      ]
    },
    socialLinks: [{icon: 'github', link: 'https://github.com/tgbf2674'}],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2021-present tgbf2674'
    },
    algolia: {
      appId: '4WDZUQENJ9',
      apiKey: '1e0583fba673174df6e9b7d3b612ac7a',
      indexName: 'mmqUtilsDoc'
    }
  }
}
