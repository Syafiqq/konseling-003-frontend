import axios from 'axios'

const instance = axios.create()
instance.defaults.baseURL = ''
instance.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
instance.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'
instance.defaults.headers.post['Accept'] = 'application/json'
instance.defaults.headers.patch['Content-Type'] = 'application/json;charset=UTF-8'
instance.defaults.headers.patch['Accept'] = 'application/json'

export default instance
