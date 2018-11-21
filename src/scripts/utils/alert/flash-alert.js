import commonAlert from './common-alert'
import store from '../../../store'

export default function (reflash = false) {
  let alerts = store.state.alert
  commonAlert(alerts || [])
  if (!reflash) {
    store.commit('FLASH_ALERT', [])
  }
}
