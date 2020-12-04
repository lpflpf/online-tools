import Vue from 'vue'
import Router from 'vue-router'
import Sql2Go from '../components/Sql2Go'
import Json2Go from '../components/Json2Go'
import FormatJson from '../components/FormatJson'
/* eslint-disable */
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Sql2Go',
      component: Sql2Go
    },
    {
      path: '/json2go',
      name: 'Json2Go',
      component: Json2Go
    },
    {
      path: '/formatJson',
      name: 'FormatJson',
      component: FormatJson
    }
  ]
})
