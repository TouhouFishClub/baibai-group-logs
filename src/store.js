import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawer: null,
    isDark: false,
    actionGroupId: 0,
    titleName: 'Baibai Group Logs',
    updateMsg: 0
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
    },
    changeTitle(state, title) {
      state.titleName = title
    },
    updateMsg(state, ts) {
      state.updateMsg = ts
    },
  },
  actions: {
    changeGroup({ commit }, { isMobile, group_name, group_id }) {
      if(isMobile){
        commit('tapDrawer')
      }
      commit('changeGroupId', group_id)
      commit('changeTitle', group_name)
    }
  }
})
