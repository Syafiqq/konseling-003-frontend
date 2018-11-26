import axios from '../http/common-axios'
import store from '../../../store'
import router from '../../../router'
import commonAlert from '../../utils/alert/common-alert'

export default function (credentials, success, failed, always) {
  return axios.axios()
    .post('/student/auth/login', credentials)
    .then((response) => {
      if (success != null) {
        success(response)
      }
      if (response.status === 200) {
        store.commit('FLASH', { notify: response?.data?.notify, alert: response?.data?.alert })
        store.dispatch('login', {
          token: response.data.data.token
        }).then(() => {
          router.push({ name: 'home' })
        })
      }
    })
    .catch((rFailed) => {
      if (failed) {
        failed(rFailed.response)
      }
      if (rFailed.response.status === 403) {
        commonAlert(rFailed.response.data.alert || [])
        store.dispatch('purge_token').then()
      }
    })
    .then(always)
}
