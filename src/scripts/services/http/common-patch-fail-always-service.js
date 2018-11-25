import service from '../http/refreshable-axios-service'
import commonAlert from '../../utils/alert/common-alert'

export default function (url, data, success, failed, always) {
  return service.axios()
    .patch(url, data)
    .then((response) => {
      if (success != null) {
        if (response.status === 200) {
          success(response)
          return
        } else if (failed != null) {
          failed(null, response)
          return
        }
      }
      commonAlert(response?.data?.alert || [])
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
