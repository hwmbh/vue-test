import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import axios from 'axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/css/normalize.css'
import './assets/scss/main.scss'
import util from './api/util'
import Cookies from 'js-cookie'

Vue.config.productionTip = false
Vue.use(ElementUI, { size: 'small' })
Vue.prototype.$Cookies = Cookies
Vue.prototype.$util = util
Vue.use(ElementUI);
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')



