import service from './common-get-service'

export default function (success, failed, always) {
  return service('/student/dashboard/', success, failed, always)
}
