export default (axios) => {
  axios.defaults.baseURL = ''
  axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
  axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'
  axios.defaults.headers.post['Accept'] = 'application/json'
  axios.defaults.headers.patch['Content-Type'] = 'application/json;charset=UTF-8'
  axios.defaults.headers.patch['Accept'] = 'application/json'
  axios.defaults.headers.delete['Content-Type'] = 'application/json;charset=UTF-8'
  axios.defaults.headers.delete['Accept'] = 'application/json'
  axios.defaults.headers.get['Content-Type'] = 'application/json;charset=UTF-8'
  axios.defaults.headers.get['Accept'] = 'application/json'
}
