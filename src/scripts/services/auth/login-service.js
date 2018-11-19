import axios from '../http/common-axios'
import store from '../../../store'
import router from '../../../router'

export default function (credentials, success, failed, always) {
  return axios
    .post('/student/auth/login', credentials)
    .then((response) => {
      if (success != null) {
        success(response)
      }
      if (response.status === 200) {
        store.dispatch('login', {
          token: response.data.data.token
        }).then(() => {
          router.push({ name: 'home' })
        })
      }
    })
    .catch(failed)
    .then(always)
}
