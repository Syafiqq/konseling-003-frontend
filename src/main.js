import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import pace from 'pace-progress'
import PerfectScrollbar from 'perfect-scrollbar'
import Cookie from 'js-cookie'

require('./resources/js/bootstrap.js')

pace.start()

window.$.fn.perfectScrollbar = function (options) {
  return this.each(function (k, elm) {
    return new PerfectScrollbar(elm, options || {})
  })
}
window.Cookies = Cookie
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
