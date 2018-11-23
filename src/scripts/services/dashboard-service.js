import axios from '../http/common-axios'

export default function (success, failed, always) {
  return axios
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
