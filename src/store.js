import Vue from 'vue'
import Vuex from 'vuex'
import router from './router'
import axios from './scripts/services/http/refreshable-axios-service'

Vue.use(Vuex)

const LOGIN = 'LOGIN'
const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
const LOGOUT = 'LOGOUT'
const FLASH = 'FLASH'

export default new Vuex.Store({
  state: {
    isLoggedIn: localStorage.getItem('token'),
    alert: [],
    notify: []
  },
  mutations: {
    [LOGIN] (state) {
    },
    [LOGIN_SUCCESS] (state, token) {
      localStorage.setItem('token', token)
      axios.refresh(token)

      state.isLoggedIn = token
    },
    [LOGOUT] (state) {
      localStorage.removeItem('token')
      axios.refresh(null)

      state.isLoggedIn = null
    },
    [FLASH] (state, data) {
      state.notify = data.notify
      state.alert = data.alert
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
