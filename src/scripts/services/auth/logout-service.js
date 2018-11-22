import service from '../http/refreshable-axios-service'
import store from '../../../store'
import router from '../../../router'
import commonAlert from '../../utils/alert/common-alert'

export default function (success, failed, always) {
  return service.axios()
    .post('/student/auth/logout')
    .then((response) => {
      if (success != null) {
        success(response)
      }
      if (response.status === 200) {
        store.dispatch('logout').then(() => {
          if (router.currentRoute?.path === '/') {
            commonAlert(response?.data?.alert || [])
          } else {
            store.commit('FLASH', { notify: response?.data?.notify, alert: response?.data?.alert })
            router.push({ name: 'auth-login' })
          }
        })
      }
    })
    .catch((rFailed) => {
      commonAlert(rFailed.response?.data?.alert || [])
      failed(rFailed)
    })
    .then(always)
}
