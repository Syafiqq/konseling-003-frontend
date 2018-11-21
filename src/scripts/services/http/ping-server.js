import store from '../../../store'
import PingService from '../auth/ping-service'

export default async function () {
  let token = store.state.token
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
  return status
}
