function compooentUrl(url) {
  return require(`@/sun-ui/packages/${url}/src/index.md`)
}

function domeUrl(url) {
  return require(`@/views/${url}`)
}
var router = [{
  path: '/brief',
  name: 'brief',
  component: r => require.ensure([], () => r(domeUrl('brief')), 'brief'),
  dome: r => require.ensure([], () => r(require('@/index.md')), 'brief'),
  meta: {
    name: "brief 简介"
  }
}, {
  path: '/Button',
  name: 'Button',
  component: r => require.ensure([], () => r(domeUrl('Button')), 'Button'),
  dome: r => require.ensure([], () => r(compooentUrl('Button')), 'Button'),
  meta: {
    name: "Button 按钮"
  }
}, {
  path: '/Cell',
  name: 'Cell',
  component: r => require.ensure([], () => r(domeUrl('Cell')), 'Cell'),
  dome: r => require.ensure([], () => r(compooentUrl('Cell')), 'Cell'),
  meta: {
    name: "Cell 单元格"
  }
},
{
  path: '/sunAlert',
  name: 'sunAlert',
  component: r => require.ensure([], () => r(domeUrl('sunAlert')), 'sunAlert'),
  dome: r => require.ensure([], () => r(compooentUrl('sunAlert')), 'sunAlert'),
  meta: {
    name: "sunAlert 弹出框"
  }
},
{
  path: '/Swipe',
  name: 'Swipe',
  component: r => require.ensure([], () => r(domeUrl('Swipe')), 'Swipe'),
  dome: r => require.ensure([], () => r(compooentUrl('Swipe')), 'Swipe'),
  meta: {
    name: "Swipe 轮播图"
  }
}, {
  path: '/Toast',
  name: 'Toast',
  component: r => require.ensure([], () => r(domeUrl('Toast')), 'Toast'),
  dome: r => require.ensure([], () => r(compooentUrl('Toast')), 'Toast'),
  meta: {
    name: "Toast 轻提示"
  }
}, {
  path: '/List',
  name: 'List',
  component: r => require.ensure([], () => r(domeUrl('List')), 'List'),
  dome: r => require.ensure([], () => r(compooentUrl('InfiniteScroll')), 'List'),
  meta: {
    name: "List 滚动"
  }
}, {
  path: '/mlLazy',
  name: 'mlLazy',
  component: r => require.ensure([], () => r(domeUrl('mlLazy')), 'mlLazy'),
  dome: r => require.ensure([], () => r(compooentUrl('mlLazy')), 'mlLazy'),
  meta: {
    name: "mlLazy 懒加载"
  }
}, {
  path: '/NavBar',
  name: 'NavBar',
  component: r => require.ensure([], () => r(domeUrl('NavBar')), 'NavBar'),
  dome: r => require.ensure([], () => r(compooentUrl('NavBar')), 'NavBar'),
  meta: {
    name: "NavBar 导航"
  }
}, {
  path: '/Icon',
  name: 'Icon',
  component: r => require.ensure([], () => r(domeUrl('Icon')), 'Icon'),
  meta: {
    name: "Icon 图标"
  },
  dome: r => require.ensure([], () => r(compooentUrl('Icon')), 'Icon')
},
{
  path: '/Sticky',
  name: 'Sticky',
  component: r => require.ensure([], () => r(domeUrl('Sticky')), 'Sticky'),
  dome: r => require.ensure([], () => r(compooentUrl('Sticky')), 'Sticky'),
  meta: {
    name: "Sticky 粘贴定位"
  }
},
{
  path: '/Loadings',
  name: 'Loadings',
  component: r => require.ensure([], () => r(domeUrl('Loadings')), 'Loadings'),
  dome: r => require.ensure([], () => r(compooentUrl('Loadings')), 'Loadings'),
  meta: {
    name: "Loading 加载"
  }
},
{
  path: '/Switch',
  name: 'Switch',
  component: r => require.ensure([], () => r(domeUrl('Switch')), 'Switch'),
  dome: r => require.ensure([], () => r(compooentUrl('Switch')), 'Switch'),
  meta: {
    name: "Switch 开关"
  }
},
{
  path: '/Popup',
  name: 'Popup',
  component: r => require.ensure([], () => r(domeUrl('Popup')), 'Popup'),
  dome: r => require.ensure([], () => r(compooentUrl('Popup')), 'Popup'),
  meta: {
    name: "Popup 弹出层"
  }
},
{
  path: '/Utils',
  name: 'Utils',
  component: r => require.ensure([], () => r(domeUrl('Utils')), 'Utils'),
  dome: r => require.ensure([], () => r(compooentUrl('Utils')), 'Utils'),
  meta: {
    name: "Utils 正则"
  }
},
{
  path: '/Picture',
  name: 'Picture',
  component: r => require.ensure([], () => r(domeUrl('Picture')), 'Picture'),
  dome: r => require.ensure([], () => r(compooentUrl('Picture')), 'Picture'),
  meta: {
    name: "Picture 图片"
  }
},
{
  path: '/Cache',
  name: 'Cache',
  component: r => require.ensure([], () => r(domeUrl('Cache')), 'Cache'),
  dome: r => require.ensure([], () => r(compooentUrl('Cache')), 'Cache'),
  meta: {
    name: "Cache 缓存操作"
  }
},
{
  path: '/FormHttp',
  name: 'FormHttp',
  component: r => require.ensure([], () => r(domeUrl('FormHttp')), 'FormHttp'),
  dome: r => require.ensure([], () => r(compooentUrl('FormHttp')), 'FormHttp'),
  meta: {
    name: "模拟表单提交"
  }
},
{
  path: '/Avatar',
  name: 'Avatar',
  component: r => require.ensure([], () => r(domeUrl('Avatar')), 'Avatar'),
  dome: r => require.ensure([], () => r(compooentUrl('Avatar')), 'Avatar'),
  meta: {
    name: "头像"
  }
},
{
  path: '/BaseCount',
  name: 'BaseCount',
  component: r => require.ensure([], () => r(domeUrl('BaseCount')), 'BaseCount'),
  dome: r => require.ensure([], () => r(compooentUrl('BaseCount')), 'BaseCount'),
  meta: {
    name: "基础倒计时"
  }
},
]
export default router
