import service from '../http/refreshable-axios-service'
import commonAlert from '../../utils/alert/common-alert'

export default function (url, data, success, failed, always) {
  return service.axios()
    .patch(url, data)
    .then((response) => {
      if (success != null) {
        success(response)
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
