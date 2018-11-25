import service from '../http/common-patch-fail-always-service'
import commonAlert from '../../utils/alert/common-alert'
import router from '../../../router'

export default function (data, success, always) {
  return service(`/student/course/start/${router.currentRoute.params.id}`, data, (s) => {
    commonAlert(s?.data?.alert || [])
    success(s)
  }, null, always)
}
