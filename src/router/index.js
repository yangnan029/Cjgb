import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
 const router= new Router({
  mode: 'history',
  base: "",
  linkActiveClass: 'active',
  routes: [
    {
      path: '*',
      name: 'loginV',
      component: resolve => require(["../loginV.vue"], resolve)
    }, {
      path: '/loginV',
      name: 'loginV',
      component: resolve => require(["../loginV.vue"], resolve)
    },
    {
      path: '/account',
      name: 'account',
      component: resolve => require(["../account.vue"], resolve),
      redirect: "/productV",
      children: [
        {
          path: '/productV',
          name: 'productV',
          component: resolve => require(["../productV.vue"], resolve),
        },
        {
          path: '/loveValue',
          name: 'loveValue',
          component: resolve => require(["../loveValue.vue"], resolve),
        },
        
        {
          path: '/accountInfo',
          name: 'accountInfo',
          component: resolve => require(["../accountInfo.vue"], resolve),
        },
        {
          path: '/wealth',
          name: 'wealth',
          component: resolve => require(["../wealth.vue"], resolve),
        }
      ],
      meta: {  auth: true}
    },
    {
      path: '/current',
      name: 'current',
      component: resolve => require(["../current.vue"], resolve) ,
       meta: {
        auth: true
      }
    },
    {
      path: '/help',
      name: 'help',
      component: resolve => require(["../help.vue"], resolve)
      , meta: {
        auth: true
      }
    },
    {
      path: '/table',
      name: 'table',
      component: resolve => require(["../table.vue"], resolve)
    }
  ]
})

router.beforeEach((to, from, next) => {


  console.log(to)
  console.log(from)
  if (to.matched.some(record => record.meta.auth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    const login=window.localStorage.getItem('logined');
    if (!login) {
      next({
        path: '/loginV',
        query: { redirect: to.fullPath }
      })
    } else {
      console.log('需要登录')
      next()
    }
  } else {
    
    next() // 确保一定要调用 next()
  }
})

export default router;
