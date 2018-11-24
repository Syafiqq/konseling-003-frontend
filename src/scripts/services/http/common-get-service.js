import instance from './refreshable-axios-service'

export default function (url, success, failed, always) {
  return instance.axios()
    .get(url)
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
