import Vue from 'vue'
import Vuex from 'vuex'
import router from './router'

Vue.use(Vuex)

const LOGIN = 'LOGIN'
const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
const LOGOUT = 'LOGOUT'
const FLASH = 'FLASH'
const FLASH_NOTIFY = 'FLASH_NOTIFY'
const FLASH_ALERT = 'FLASH_ALERT'
const REFLASH_ALERT = 'REFLASH_ALERT'

export default new Vuex.Store({
  state: {
    isLoggedIn: localStorage.getItem('token'),
    alert: [],
    reflashAlert: false,
    notify: []
  },
  mutations: {
    [LOGIN] (state) {
    },
    [LOGIN_SUCCESS] (state, token) {
      localStorage.setItem('token', token)

      state.isLoggedIn = token
    },
    [LOGOUT] (state) {
      localStorage.removeItem('token')

      state.isLoggedIn = null
    },
    [FLASH] (state, data) {
      state.notify = data.notify
      state.alert = data.alert
    },
    [FLASH_NOTIFY] (state, notify) {
      state.notify = notify
    },
    [FLASH_ALERT] (state, alert) {
      state.alert = alert
    }
    [REFLASH_ALERT] (state, alert) {
      state.reflashAlert = alert
    }
  },
  actions: {
    login ({ state, commit, rootState }, credential) {
      console.log({ state: state, commit: commit, rootState: rootState, credential: credential })
      commit(LOGIN)
      return new Promise(resolve => {
        commit(LOGIN_SUCCESS, credential.token)
        resolve()
      })
    },
    logout ({ commit }, callback = () => router.push('/auth/login')) {
      return new Promise(resolve => {
        commit(LOGOUT)
        resolve()
      }).then(callback)
    }
  }
})
