import axios from 'axios'
import axiosCommonConfig from './axios-common-config'
import { loadProgressBar } from 'axios-progress-bar'

const instance = axios.create()
loadProgressBar({}, instance)

axiosCommonConfig(instance)

const rAxios = {
  refresh: () => {
    instance.defaults.headers.common['Authorization'] = null
  },
  axios: () => {
    rAxios.refresh()
    return instance
  }
}

export default rAxios
