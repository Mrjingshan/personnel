import Vue from 'vue'

import 'normalize.css/normalize.css' //标准化css

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en'

import '@/styles/index.scss' // global css

import App from './App'
import store from './store'
import router from './router'

import '@/icons' // icon
import '@/permission' // permission control
import service from './utils/request'
import '../mock/mock'
Vue.prototype.service = service
// import { mockXHR } from '../mock'
// if (process.env.NODE_ENV === 'production') {
//   mockXHR()
// }

// ElementUI 中文化
Vue.use(ElementUI, { locale })
Vue.config.productionTip = false
// form-create
import formCreate from '@form-create/element-ui';
Vue.use(formCreate);
// axios 原型绑定
import serve from '@/utils/request'
Vue.prototype.$serve = serve;
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
