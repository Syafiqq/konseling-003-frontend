import service from '../../../services/course/course-result-get-service'
import guard from '.././common-guard'

export default async function (to, from, next) {
  await guard(service, to, from, next)
}
