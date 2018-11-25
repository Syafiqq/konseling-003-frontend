import service from '../http/common-get-service'

export default function (to, success, failed, always) {
  return service('/student/profile/', success, failed, always)
}
