import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawer: null,
    isDark: false,
    actionGroupId: 0
  },
  mutations: {
    tapDrawer(state) {
      state.drawer = !state.drawer
    },
    tapTheme(state) {
      state.isDark = !state.isDark
    },
    changeGroupId(state, groupId) {
      state.actionGroupId = groupId
    }
  },
  actions: {

  }
})
