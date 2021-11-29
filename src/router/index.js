import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index'
import config from './config'
Vue.use(Router)
var routerList = []
config.forEach(res => {
  routerList.push({
    path: res.path,
    name: res.name,
    component: res.dome,
  })
})
var router = new Router({
  routes: [{
    path: '/',
    name: 'index',
    component: index,
    redirect: "brief",
    children: routerList
  }]
})

// 防止重复跳转同一页面而报错
const VueRouterPush = Router.prototype.push
Router.prototype.push = function push(to) {
  return VueRouterPush.call(this, to).catch(err => err)
}
export default router
