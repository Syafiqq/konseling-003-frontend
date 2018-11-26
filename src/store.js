import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const STORE_TOKEN = 'STORE_TOKEN'
const FLASH = 'FLASH'
const FLASH_NOTIFY = 'FLASH_NOTIFY'
const FLASH_ALERT = 'FLASH_ALERT'
const REFLASH_ALERT = 'REFLASH_ALERT'
const MERGE_ALERT = 'MERGE_ALERT'
const PUSH_AUTH_DATA_PASSING = 'PUSH_AUTH_DATA_PASSING'
const PURGE_AUTH_DATA_PASSING = 'PURGE_AUTH_DATA_PASSING'
const COURSE_NAVIGATION = 'COURSE_NAVIGATION'

export default new Vuex.Store({
  state: {
    token: localStorage.getItem('token'),
    alert: [],
    reflashAlert: false,
    notify: [],
    authDataPassing: {},
    courseNavigation: []
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
    [MERGE_ALERT] (state, alert) {
      state.alert = window._.merge(state.alert.concat(alert || []))
    },
    [REFLASH_ALERT] (state, alert) {
      state.reflashAlert = alert
    },
    [PUSH_AUTH_DATA_PASSING] (state, data) {
      state.authDataPassing = data
    },
    [PURGE_AUTH_DATA_PASSING] (state) {
      state.authDataPassing = {}
    },
    [COURSE_NAVIGATION] (state, data) {
      state.courseNavigation = data || []
    }
  },
  actions: {
    login ({ dispatch }, credential) {
      return new Promise(resolve => {
        dispatch('create_token', credential.token)
        resolve()
      })
    },
    logout ({ dispatch }) {
      return new Promise(resolve => {
        dispatch('purge_token')
        resolve()
      })
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
    },
    pop_auth_data_passing ({ commit, state }) {
      return new Promise(resolve => {
        let data = state.authDataPassing
        commit(PURGE_AUTH_DATA_PASSING)
        resolve(data)
      })
    }
  },
  getters: {
    gCourseNavigation: state => () => state.courseNavigation
  }
})
