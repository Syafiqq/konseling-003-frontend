import store from '../../../store'
import pingServer from '../../services/http/ping-server'
import router from '../../../router'
import commonAlert from '../../utils/alert/common-alert'

export default async function (to, from, next) {
  let status = await pingServer()

  if (status) {
    next()
  } else {
    let alert = ['Anda Belum Terauthentikasi']
    if (router.currentRoute?.path === from.path) {
      commonAlert(alert)
    } else {
      store.commit('FLASH_ALERT', alert)
    }
    next({ path: '/auth/login', replace: true })
  }
}
