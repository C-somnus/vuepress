module.exports = {
  // 配置主题
  // theme: 'awesome',
  configureWebpack: {
    resolve: {
      alias: {
        '@vue': '../images/vue',
      }
    }
  },
  // 其它配置
  markdown: {
    // 显示代码块行号
    lineNumbers: true
  },
  title: 'VuePress Blog',
  description: 'VuePress Blog 的网站描述',
  port: 3000,
  host: '127.0.0.1',
  // dest: 'dist',
  themeConfig: {
    // 其它配置
    repo: 'https://github.com/C-somnus/blog',
    editLinks: true,
    editLinkText: '编辑此页',
    repoLabel: 'Github',
    // 1.接受字符串，它设置了最后更新时间的label，例如：最后更新时间：2019年5月3日 21:51:53
    lastUpdated: '2019年5月3日 21:51:53',
    // 2.设置true，开启最后更新时间(默认不开启)
    lastUpdated: true,
    // 配置是否显示nav
    // navbar: false,
    // 配置search
    // search: false,
    // 对内置的搜索进行最多结果数量的限制
    // 侧边栏
    // 其它配置
    sidebar: [
      {
        title: '前端三剑客',
        collapsable: false,
        children: [
          '/CSS/',
          '/HTML/',
          '/JavaScript/'
        ]
      }
    ],
    searchMaxSuggestions: 10,
    nav: [
      { text: '首页', link: '/' },
      { text: '前端三剑客', items: [
        { text: 'HTML', link: '/HTML/' },
        { text: 'CSS', link: '/CSS/' },
        { text: 'JavaScript', link: '/JavaScript/' }
      ]},
      { text: 'Vue.jss', link: '/vue/' },
    ]
  }
}
