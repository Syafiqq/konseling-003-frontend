import store from '../../../store'
import commonAlert from '../../utils/alert/common-alert'
import pingServer from '../../services/http/ping-server'
import router from '../../../router'

export default async function (to, from, next) {
  let status = await pingServer()
  if (!status) {
    next()
  } else {
    let alert = ['Anda Sudah Terauthentikasi']
    if (router.currentRoute?.path === from.path) {
      commonAlert(alert)
    } else {
      store.commit('FLASH_ALERT', alert)
    }
    next(from && from.path === '/' ? '/' : false)
  }
}
