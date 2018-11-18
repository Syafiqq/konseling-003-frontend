import axios from '../http/refreshable-axios-service'

export default function (success, failed) {
  return axios.instance
    .post('/student/auth/ping')
    .then(success)
    .catch(failed)
}
