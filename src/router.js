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
      meta: { layout: 'plain-container' },
      component: require('./views/Home.vue').default
    },
    {
      path: '/auth/login',
      name: 'auth-login',
      meta: { layout: 'plain-container' },
      component: () => import('./views/auth/Login.vue')
    },
    {
      path: '/auth/register',
      name: 'auth-register',
      meta: { layout: 'plain-container' },
      component: () => import('./views/auth/Register.vue')
    },
    {
      path: '/home',
      name: 'home',
      meta: { layout: 'admin-container-no-aside' },
      component: () => import('./views/Dashboard.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      meta: { layout: 'admin-container-no-aside' },
      component: () => import('./views/Profile.vue')
    },
    {
      path: '/course/start/:id',
      name: 'course-start',
      meta: { layout: 'admin-container-no-aside' },
      component: () => import('./views/course/Start.vue')
    },
    {
      path: '/course/result',
      name: 'course-result',
      meta: { layout: 'admin-container-no-aside' },
      component: () => import('./views/course/Result.vue')
    },
    {
      path: '/course/result/:id/detail',
      name: 'course-result-detail',
      meta: { layout: 'admin-container-no-aside' },
      component: () => import('./views/course/Detail.vue')
    }
  ]
})
