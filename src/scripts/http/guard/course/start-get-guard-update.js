import service from '../../../services/course/course-start-get-service'
import guard from '.././common-update-guard'

export default async function (vm, to, from, next) {
  await guard(service, vm, to, from, next)
}
