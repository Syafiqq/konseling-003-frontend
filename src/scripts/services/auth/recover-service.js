import service from '../http/refreshable-axios-service'
import commonAlert from '../../utils/alert/common-alert'
import store from '../../../store'
import router from '../../../router'

export default function (credentials, success, failed, always) {
  return service.axios()
    .patch('/student/auth/recover', credentials)
    .then((response) => {
      if (success != null) {
        success(response)
      }
      if (response.status === 200) {
        store.commit('FLASH', { notify: response?.data?.notify, alert: response?.data?.alert })
        router.push({ name: 'auth-login' })
      }
    })
    .catch((rFailed) => {
      commonAlert(rFailed.response?.data?.alert || [])
      if (failed != null) {
        failed(rFailed)
      }
    })
    .then(() => {
      if (always != null) {
        always()
      }
    })
}
