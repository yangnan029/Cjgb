import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode:'history',
  base:"",
  routes: [
    {
      path: '*',
      name: 'login',
      component: resolve => require(["../login.vue"], resolve)
    },
    {
      path: '/product',
      name: 'product',
      component: resolve => require(["../product.vue"], resolve)
    }
  ]
})
