import Vue from 'vue'
import './plugins/axios'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import 'viewerjs/dist/viewer.css'
import Viewer from 'v-viewer'


Vue.config.productionTip = false
Vue.use(Viewer)

Viewer.setDefaults({
  navbar: false,
  toolbar: {
    zoomIn: {
      show: 1,
      size: 'large',
    },
    zoomOut: {
      show: 1,
      size: 'large',
    },
    oneToOne: {
      show: 1,
      size: 'large',
    },
    reset: {
      show: 1,
      size: 'large',
    },
    prev: 0,
    play: {
      show: 1,
      size: 'large',
      click(...args) {
        console.log(args)
      }
    },
    next: 0,
    rotateLeft: {
      show: 1,
      size: 'large',
    },
    rotateRight: {
      show: 1,
      size: 'large',
    },
    flipHorizontal: {
      show: 1,
      size: 'large',
    },
    flipVertical: {
      show: 1,
      size: 'large',
    },
  },
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
