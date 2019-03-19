import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawer: null,
    isDark: false,
  },
  mutations: {
    tapDrawer(state) {
      state.drawer = !state.drawer
    },
    tapTheme(state) {
      state.isDark = !state.isDark
    }
  },
  actions: {

  }
})
