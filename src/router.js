import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'root',
      component: Home
    },
    {
      path: '/auth/login',
      name: 'auth-login',
      component: () => import('@/views/auth/Login.vue')
    },
    {
      path: '/auth/register',
      name: 'auth-register',
      component: () => import('@/views/auth/Register.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('@/views/Dashboard.vue')
    }
  ]
})
