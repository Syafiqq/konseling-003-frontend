import service from '../http/common-patch-fail-always-service'
import commonAlert from '../../utils/alert/common-alert'

export default function (data) {
  return service('/student/profile/', data, (s) => {
    commonAlert(s?.data?.alert || [])
  })
}
