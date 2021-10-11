// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import Vue from 'vue'

/* eslint-disable */
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'
import Meta from "vue-meta"

/* global Vue */

// Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.use(Meta)

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
