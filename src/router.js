import Vue from 'vue'
import Router from 'vue-router'

/* 系统管理、登陆、版本 */
import Login from './components/manage/Login'
import DDLogin from './components/manage/DDLogin'
import Version from './components/welcome/Version'

//基本信息管理
import administrator from './components/information/administrator'
// import Home from './views/Home.vue'
// import Head from './components/Head.vue'

import Main from './components/Main'

Vue.use(Router) 

const router = new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    // { path: '/head', name: 'head',component: Head},
    // { path: '/about',name: 'about',component: () => import('./views/About.vue')},
    { path: '/login', component: Login, meta: { title: '登录' } },
    { path: '/ddlogin', component: DDLogin, meta: { title: '钉钉登录中' } },
    {
      path: '/',
      component: Main,
      children: [
        { path: '/information/administrator', component: administrator, meta: { title: '公司管理' } },
        {
          path: '/version',
          component: Version,
          children: [
            { path: '', meta: { title: '版本说明' }, component: r => require.ensure([], () => r(require('../VERSION.md'))) }
          ]
        }
      ]
    }
  ]
})
const pkg = require('../package')
router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} - ${pkg.description}`
  next()
})
export default router