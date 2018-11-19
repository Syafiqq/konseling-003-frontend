import axios from '../http/refreshable-axios-service'

export default function (success, failed, always) {
  return axios.instance
    .post('/student/auth/refresh')
    .then(success)
    .catch(failed)
    .then(always)
}
