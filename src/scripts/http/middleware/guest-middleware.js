import PingService from '../../services/auth/ping-service'
import store from '../../../store'

export default async function (to, from, next) {
  let token = store.state.isLoggedIn
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
      await store.dispatch('logout', { callback: null })
    }
  }

  if (!status) {
    next()
  } else {
    next(from ? from.path : '/')
  }
}
