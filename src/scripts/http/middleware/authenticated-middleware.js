import store from '../../../store'
import pingServer from '../../services/http/ping-server'

export default async function (to, from, next) {
  let status = await pingServer()

  if (status) {
    next()
  } else {
    store.commit('FLASH_ALERT', ['Anda Belum Terauthentikasi'])
    next(from ? from.path : '/')
  }
}
