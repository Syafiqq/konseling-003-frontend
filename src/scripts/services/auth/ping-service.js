import service from '../http/refreshable-axios-service'

export default function (success, failed, always) {
  return service.axios()
    .post('/student/auth/ping')
    .then(success)
    .catch(failed)
    .then(always)
}
