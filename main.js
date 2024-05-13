import App from './App'
// #ifndef VUE3
import Vue from 'vue'

import './uni.promisify.adaptor'
Vue.config.productionTip = false

App.mpType = 'app'
const app = new Vue({
  ...App
})

app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
import request from './utils/request.js'

import cuCustom from './colorui/components/cu-custom.vue'
import cuCustomJS from './colorui/components/cu-custom.js'


export function createApp() {
  const app = createSSRApp(App)
  app.component('cu-custom', cuCustom);
  app.config.globalProperties.$cuCustomJS = cuCustomJS;
  app.config.globalProperties.$request = request
  // app.config.globalProperties.$zaudio = zaudio
  return {
    app
  }
}
// #endif