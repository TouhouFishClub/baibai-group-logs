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

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
