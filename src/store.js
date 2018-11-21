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
      state.isLoggedIn = token
    },
    [PURGE_TOKEN] (state) {
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
    login ({ dispatch, commit }, credential) {
      return new Promise(async resolve => {
        await dispatch('create_token', credential.token)
        resolve()
      })
    },
    logout ({ dispatch, commit }, callback = () => router.push('/auth/login')) {
      return new Promise(async resolve => {
        await dispatch('purge_token')
        resolve()
      }).then(callback)
    },
    async purge_token ({ commit }) {
      await localStorage.removeItem('token')
      commit(CREATE_TOKEN, null)
    },
    async create_token ({ commit }, token) {
      await localStorage.setItem('token', token)
      commit(CREATE_TOKEN, token)
    }
  }
})
