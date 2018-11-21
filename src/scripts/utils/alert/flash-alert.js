import commonAlert from './common-alert'
import store from '../../../store'

export default function () {
  let alerts = store.state.alert
  commonAlert(alerts || [])
  if (!store.state.reflashAlert) {
    store.commit('FLASH_ALERT', [])
    return
  }
  store.commit('REFLASH_ALERT', false)
}
