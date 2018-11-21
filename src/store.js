import Vue from 'vue'
import Vuex from 'vuex'
import router from './router'

Vue.use(Vuex)

const CREATE_TOKEN = 'CREATE_TOKEN'
const PURGE_TOKEN = 'PURGE_TOKEN'
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
    [CREATE_TOKEN] (state, token) {
      localStorage.setItem('token', token)

      state.isLoggedIn = token
    },
    [PURGE_TOKEN] (state) {
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
    },
    [REFLASH_ALERT] (state, alert) {
      state.reflashAlert = alert
    }
  },
  actions: {
    login ({ state, commit, rootState }, credential) {
      console.log({ state: state, commit: commit, rootState: rootState, credential: credential })
      return new Promise(resolve => {
        commit(CREATE_TOKEN, credential.token)
        resolve()
      })
    },
    logout ({ commit }, callback = () => router.push('/auth/login')) {
      return new Promise(resolve => {
        commit(PURGE_TOKEN)
        resolve()
      }).then(callback)
    }
  }
})
