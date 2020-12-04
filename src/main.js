// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/* eslint-disable no-new */
import Vue from 'vue'

import {Button, Input, Divider, Form, FormItem, Container, Header, PageHeader, Main, Menu, MenuItem, Checkbox, Row, Col} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'

Vue.use(Input)
Vue.use(Divider)
Vue.use(Row)
Vue.use(Col)
Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Container)
Vue.use(Header)
Vue.use(PageHeader)
Vue.use(Main)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Checkbox)
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
