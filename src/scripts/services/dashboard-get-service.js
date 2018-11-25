import service from './http/common-get-service'

export default function (to, success, failed, always) {
  return service('/student/dashboard/', success, failed, always)
}
