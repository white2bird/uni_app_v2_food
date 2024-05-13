import App from './App'

// #ifndef VUE3
import Vue from 'vue'
import './uni.promisify.adaptor'
import cuCustom from './colorui/components/cu-custom.vue'
import cuCustomJS from './colorui/components/cu-custom.js'
Vue.prototype.$cuCustomJS = cuCustomJS;
Vue.component('cu-custom',cuCustom)
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
  ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
import cuCustom from './colorui/components/cu-custom.vue'
import cuCustomJS from './colorui/components/cu-custom.js'

export function createApp() {
  const app = createSSRApp(App)
  // 注册全局组件
  app.component('cu-custom', cuCustom);
  app.config.globalProperties.$cuCustomJS = cuCustomJS;
  return {
    app
  }
}
// #endif