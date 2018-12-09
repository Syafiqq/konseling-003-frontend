import service from '../http/common-get-service'

export default function (to, success, failed, always) {
  console.log(to?.params)
  return service(`/student/course/${to?.params['id']}/detail`, success, failed, always)
}
