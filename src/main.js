import Vue from 'vue'
import App from './App.vue'
import router from './router/index'


import './plugins/element.js'

import './assets/css/global.css'
import './assets/fonts/iconfont.css'

import TreeTable from 'vue-table-with-tree-grid'

import VueQuillEditor from 'vue-quill-editor'

import 'quill/dist/quill.core.css' // import styles
import 'quill/dist/quill.snow.css' // for snow theme
import 'quill/dist/quill.bubble.css' // for bubble theme


import axios from 'axios'
// 配置请求的跟路径
axios.defaults.baseURL = 'https://rambuild.cn/api/private/v1'

axios.interceptors.request.use(config=>{
  config.headers.Authorization = window.sessionStorage.getItem('token')
  // 在最后必须 return config
  return config

})

Vue.prototype.$http = axios

Vue.component('tree-table',TreeTable)

Vue.use(VueQuillEditor)

Vue.filter('dateFormat', function(originVal) {
  const dt = new Date(originVal)

  const y = dt.getFullYear()
  const m = (dt.getMonth() + 1 + '').padStart(2, '0')
  const d = (dt.getDate() + '').padStart(2, '0')

  const hh = (dt.getHours() + '').padStart(2, '0')
  const mm = (dt.getMinutes() + '').padStart(2, '0')
  const ss = (dt.getSeconds() + '').padStart(2, '0')

  return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
})



new Vue({
  el:'#app',
  router,
  render: h => h(App),

})


// require('./assets/css/base.css')
