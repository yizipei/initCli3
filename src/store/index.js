import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import actions from './actions' //全局action
import mutations from './mutations' //全局mutations

import order from './modules/order'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    order
  },
  mutations,
  actions,
  plugins: [createPersistedState({
    storage: window.sessionStorage
  })]
})
