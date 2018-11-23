import instance from '../services/http/refreshable-axios-service'

export default function (success, failed, always) {
  return instance.axios()
    .get('/student/dashboard/')
    .then((response) => {
      if (success != null) {
        success(response)
      }
    })
    .catch((rFailed) => {
      if (failed) {
        failed(rFailed)
      }
    })
    .then(() => {
      if (always) {
        always()
      }
    })
}
