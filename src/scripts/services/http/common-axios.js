import axios from 'axios'
import axiosCommonConfig from './axios-common-config'

const instance = axios.create()
axiosCommonConfig(instance)

export default instance
