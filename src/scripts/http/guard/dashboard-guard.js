import store from '../../../store'
import service from '../../services/dashboard-service'
import router from '../../../router'
import commonAlert from '../../utils/alert/common-alert'

export default async function (to, from, next) {
  let data = {}
  let alert = []
  let status = false
  await service((rSuccess) => {
    if (rSuccess.status === 200) {
      data = rSuccess?.data?.data || {}
      status = true
    }
    alert = rSuccess?.data?.alert || []
  }, (rFailed) => {
    alert = rFailed?.response?.data?.alert || []
  })
  if (status) {
    store.commit('FLASH_ALERT', alert)
    next(vm => {
      vm.setData(data)
    })
  } else {
    if (router.currentRoute?.path === from.path) {
      commonAlert(alert)
    } else {
      store.commit('FLASH_ALERT', alert)
    }
    next(from && from.path === '/' ? '/' : false)
  }
}
