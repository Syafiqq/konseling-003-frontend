import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import pace from 'pace-progress'
import BootstrapVue from 'bootstrap-vue'
import PerfectScrollbar from 'perfect-scrollbar'
import VueSweetalert2 from 'vue-sweetalert2'
import VueCookies from 'vue-cookies'

import PlainContainer from './containers/PlainContainer.vue'
import AdminContainerNoAside from './containers/AdminContainerNoAside.vue'
import AdminContainer from './containers/AdminContainer.vue'

require('./resources/js/bootstrap.js')

pace.start()

window.$.fn.perfectScrollbar = function (options) {
  return this.each(function (k, elm) {
    return new PerfectScrollbar(elm, options || {})
  })
}
Vue.config.productionTip = false
Vue.use(VueSweetalert2)
Vue.use(BootstrapVue)
Vue.use(VueCookies)
require('./resources/js/vue-nav-toggle-recorder')

Vue.component('plain-container', PlainContainer)
Vue.component('admin-container-no-aside', AdminContainerNoAside)
Vue.component('admin-container', AdminContainer)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
