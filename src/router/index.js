import Sql2Go from '../components/Sql2Go'
import Json2Go from '../components/Json2Go'
import FormatJson from '../components/FormatJson'

/* global VueRouter */

/* eslint-disable */

export default new VueRouter({
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
