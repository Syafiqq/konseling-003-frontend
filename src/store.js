import Vue from 'vue'
import Vuex from 'vuex'
import router from './router'

Vue.use(Vuex)

const STORE_TOKEN = 'STORE_TOKEN'
const FLASH = 'FLASH'
const FLASH_NOTIFY = 'FLASH_NOTIFY'
const FLASH_ALERT = 'FLASH_ALERT'
const REFLASH_ALERT = 'REFLASH_ALERT'

export default new Vuex.Store({
  state: {
    token: localStorage.getItem('token'),
    alert: [],
    reflashAlert: false,
    notify: []
  },
  mutations: {
    [STORE_TOKEN] (state, token) {
      state.token = token
    },
    [FLASH] (state, { notify, alert }) {
      state.notify = notify
      state.alert = alert
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
      return new Promise(resolve => {
        dispatch('create_token', credential.token)
        resolve()
      })
    },
    logout ({ dispatch, commit }, callback = () => router.push('/auth/login')) {
      return new Promise(resolve => {
        dispatch('purge_token')
        resolve()
      }).then(callback)
    },
    purge_token ({ commit }) {
      return new Promise(resolve => {
        localStorage.removeItem('token')
        commit(STORE_TOKEN, null)
        resolve()
      })
    },
    create_token ({ commit }, token) {
      return new Promise(resolve => {
        localStorage.setItem('token', token)
        commit(STORE_TOKEN, token)
        resolve()
      })
    }
  }
})
