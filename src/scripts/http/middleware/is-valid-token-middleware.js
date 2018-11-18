import PingService from '../../services/auth/ping-service'
import store from '../../../store'

export default async function (token = store.state.isLoggedIn) {
  console.log(['token', token])
  let status = false
  if (token != null) {
    let response = null
    try {
      response = await PingService()
    } catch (e) {
      response = e.response
    }
    console.log('response', response)
    if (response != null) {
      if (response.status === 200) {
        status = true
      } else {
        await store.dispatch('logout')
      }
    }
  }
  return status
}
