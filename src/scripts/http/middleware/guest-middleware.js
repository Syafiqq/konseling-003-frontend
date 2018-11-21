import PingService from '../../services/auth/ping-service'
import store from '../../../store'

export default async function (to, from, next) {
  let token = store.state.token
  console.log({ token: token, to: to, from: from })
  let status = false
  if (token != null) {
    let response = null
    await PingService(
      (success) => {
        response = success
      },
      (failed) => {
        response = failed.response
      }
    )
    if (response != null && response.status === 200) {
      status = true
    } else {
      await store.dispatch('purge_token')
    }
  }

  if (!status) {
    next()
  } else {
    store.commit('FLASH_ALERT', ['Anda Sudah Terauthentikasi'])
    next(from ? from.path : '/')
  }
}
