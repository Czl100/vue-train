import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

console.debug('实例化根vue')

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
