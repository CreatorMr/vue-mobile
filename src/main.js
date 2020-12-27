import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Vant, { Toast } from 'vant'

import 'vant/lib/index.css'
// 自动设置REM基准值(html标签字体大小)
import 'amfe-flexible'
import './styles/index.less'

Vue.use(Vant)
Vue.config.productionTip = false
Vue.prototype.$toast = Toast

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
