import PingService from '../../services/auth/ping-service'
import store from '../../../store'

export default async function (to, from, next) {
  let token = store.state.isLoggedIn
  console.log({ token: token, to: to, from: from })
  let status = false
  if (token != null) {
    let response = null
    try {
      response = await PingService()
    } catch (e) {
      response = e.response
    }
    console.log({ response: response })
    if (response != null && response.status === 200) {
      status = true
    }
  }

  if (!status) {
    next()
  } else {
    await store.dispatch('logout', {
      callback: () => {
        next(from ? from.path : '/')
      }
    })
  }
}
