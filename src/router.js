import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'root',
      component: require('./views/Home.vue').default
    },
    {
      path: '/auth/login',
      name: 'auth-login',
      component: () => import('./views/auth/Login.vue')
    },
    {
      path: '/auth/register',
      name: 'auth-register',
      component: () => import('./views/auth/Register.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('./views/Dashboard.vue')
    }
  ]
})
