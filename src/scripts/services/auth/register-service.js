import service from '../http/refreshable-axios-service'
import commonAlert from '../../utils/alert/common-alert'

export default function (credentials, success, failed, always) {
  return service.axios()
    .post('/student/auth/register', credentials)
    .then((response) => {
      if (success != null) {
        success(response)
      }
      if (response.status === 200) {
        console.log(response)
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
