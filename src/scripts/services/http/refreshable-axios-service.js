import axios from 'axios'
import store from '../../../store'
import interceptor from './refresh-token-interceptor-service'

const instance = axios.create()
const { success, error } = interceptor
const rAxios = {
  interceptor: instance.interceptors.response.use(success, error),
  instance: instance,
  refresh: (token) => {
    instance.defaults.headers.post['Authorization'] = `Bearer ${token}`
  }
}
rAxios.refresh(store.state.isLoggedIn)

export default rAxios
