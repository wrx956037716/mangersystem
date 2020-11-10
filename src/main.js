import Vue from 'vue'
import App from './App.vue'
import router from './router/index'


import './plugins/element.js'

import './assets/css/global.css'
import './assets/fonts/iconfont.css'


import axios from 'axios'
// 配置请求的跟路径
axios.defaults.baseURL = 'https://rambuild.cn/api/private/v1'

axios.interceptors.request.use(config=>{
  config.headers.Authorization = window.sessionStorage.getItem('token')
  // 在最后必须 return config
  return config

})

Vue.prototype.$http = axios










new Vue({
  el:'#app',
  router,
  render: h => h(App),

})


// require('./assets/css/base.css')
