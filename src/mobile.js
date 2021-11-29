// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './mobile.vue'
import router from './router/dome'
import Vuetool from './sun-ui/src/index'
Vue.use(Vuetool)
Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App),
}).$mount('#app2')
