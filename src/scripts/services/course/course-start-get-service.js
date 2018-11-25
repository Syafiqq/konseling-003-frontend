import service from '../http/common-get-service'

export default function (to, success, failed, always) {
  return service(`/student/course/start/${to?.params['id']}`, success, failed, always)
}
