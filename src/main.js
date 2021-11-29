import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
// import 'highlight.js/styles/atom-one-dark.css'
// 代码高亮
// import 'highlight.js/styles/github.css'
// 其他元素使用 github 的样式
import 'github-markdown-css'
import 'highlightjs-line-numbers.js'

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
