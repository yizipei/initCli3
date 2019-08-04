import Vue from 'vue'
import App from './App.vue'
import fastClick from 'fastclick-pro'
import 'amfe-flexible'
import router from './router'
import store from './store'
import './plugins/element.js'
import request from '@/utils/request'

Vue.use(request)

Vue.config.productionTip = false
fastClick.attach(document.body)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
