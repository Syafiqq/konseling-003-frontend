import commonAlert from './common-alert'
import store from '../../../store'

export default function () {
  let alerts = store.getters.alert
  commonAlert(alerts || [])
  store.commit('FLASH_ALERT', [])
}
