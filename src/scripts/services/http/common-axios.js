import axios from 'axios'
import axiosCommonConfig from './axios-common-config'
import { loadProgressBar } from 'axios-progress-bar'

const instance = axios.create()
loadProgressBar({}, instance)

axiosCommonConfig(instance)

export default instance
