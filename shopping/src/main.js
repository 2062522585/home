import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import ElementUI from "element-ui"
import 'element-ui/lib/theme-chalk/index.css'


import axios from "axios"
axios.defaults.baseURL="http://192.168.6.18:7001"
Vue.prototype.$http=axios;

Vue.config.productionTip = false
Vue.use(ElementUI)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
