import axios from '../http/common-axios'

export default function (credentials, success, failed, always) {
  return axios
    .post('/student/auth/login', credentials)
    .then(success)
    .catch(failed)
    .then(always)
}
