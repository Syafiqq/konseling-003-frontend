import axios from 'axios'
import store from '../../../store'
import interceptor from './refresh-token-interceptor-service'
import axiosCommonConfig from './axios-common-config'
import { loadProgressBar } from 'axios-progress-bar'

const instance = axios.create()
loadProgressBar({}, instance)
axiosCommonConfig(instance)
const { success, error } = interceptor
instance.interceptors.response.use(success, error)
const rAxios = {
  refresh: (token) => {
    instance.defaults.headers.post['Authorization'] = `Bearer ${token}`
  },
  axios: () => {
    rAxios.refresh(store.state.isLoggedIn)
    return instance
  }
}

export default rAxios
