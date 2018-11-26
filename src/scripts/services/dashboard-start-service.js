import service from './http/refreshable-axios-service'
import commonAlert from '../utils/alert/common-alert'
import store from '../../store'

export default function (success, failed, always) {
  return service.axios()
    .post('/student/course/create')
    .then((response) => {
      if (response.status === 200) {
        store.commit('FLASH', { notify: response?.data?.notify, alert: response?.data?.alert })
        if (success != null) {
          success(response)
        }
      } else {
        if (failed != null) {
          failed(null, success.response)
        }
      }
    })
    .catch((rFailed) => {
      commonAlert(rFailed.response?.data?.alert || [])
      if (failed != null) {
        failed(rFailed, rFailed.response)
      }
    })
    .then(() => {
      if (always != null) {
        always()
      }
    })
}
