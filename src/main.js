import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
// 导入全局样式表
import  './assets/css/global.css'
// axios配置
// import axios from "axios";
// import axiosVue from 'axios-vue'
//
// axios.defaults.baseURL = 'http://api.com/'
// Vue.prototype.$http = axiosVue.config.productionTip = false

// axios.defaults.baseURL='http://127.0.0.1:8888/api/private/v1/'
// // eslint-disable-next-line no-undef
// Vue.prototype.$http = axiosVue.config.productionTip = false

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
