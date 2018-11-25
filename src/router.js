import Vue from 'vue'
import Router from 'vue-router'
import guestMiddleware from './scripts/http/middleware/guest-middleware'
import authMiddleware from './scripts/http/middleware/authenticated-middleware'

Vue.use(Router)

const router = new Router({
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
      component: () => import('./views/auth/Login.vue'),
      beforeEnter: guestMiddleware
    },
    {
      path: '/auth/register',
      name: 'auth-register',
      meta: { layout: 'plain-container' },
      component: () => import('./views/auth/Register.vue'),
      beforeEnter: guestMiddleware
    },
    {
      path: '/auth/lost',
      name: 'auth-lost',
      meta: { layout: 'plain-container' },
      component: () => import('./views/auth/Lost.vue'),
      beforeEnter: guestMiddleware
    },
    {
      path: '/auth/recover',
      name: 'auth-recover',
      meta: { layout: 'plain-container' },
      component: () => import('./views/auth/Recover.vue'),
      beforeEnter: guestMiddleware
    },
    {
      path: '/home',
      name: 'home',
      meta: { layout: 'admin-container-no-aside' },
      component: () => import('./views/Dashboard.vue'),
      beforeEnter: authMiddleware
    },
    {
      path: '/profile',
      name: 'profile',
      meta: { layout: 'admin-container-no-aside' },
      component: () => import('./views/Profile.vue'),
      beforeEnter: authMiddleware
    },
    {
      path: '/course/start/:id',
      name: 'course-start',
      meta: { layout: 'admin-container' },
      component: () => import('./views/course/Start.vue'),
      beforeEnter: authMiddleware
    },
    {
      path: '/course/result',
      name: 'course-result',
      meta: { layout: 'admin-container-no-aside' },
      component: () => import('./views/course/Result.vue'),
      beforeEnter: authMiddleware
    },
    {
      path: '/course/result/:id/detail',
      name: 'course-result-detail',
      meta: { layout: 'admin-container-no-aside' },
      component: () => import('./views/course/Detail.vue'),
      beforeEnter: authMiddleware
    },
    {
      path: '*',
      name: 'error-404',
      meta: { layout: 'plain-container' },
      component: () => import('./views/errors/404.vue'),
      beforeEnter: authMiddleware
    }
  ]
})
export default router
