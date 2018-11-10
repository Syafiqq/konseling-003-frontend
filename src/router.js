import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Dashboard from './views/Dashboard.vue'
import Login from './views/auth/Login.vue'
import Register from './views/auth/Register.vue'

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
      component: Login
    },
    {
      path: '/auth/register',
      name: 'auth-register',
      component: Register
    },
    {
      path: '/home',
      name: 'home',
      component: Dashboard
    },
  ]
})
