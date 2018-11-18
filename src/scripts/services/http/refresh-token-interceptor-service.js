import RefreshService from '../../services/auth/refresh-service'
import axios from 'axios'
import store from '../../../store'

/**
 * @see https://gist.github.com/mkjiau/650013a99c341c9f23ca00ccb213db1c
 * @see https://gist.github.com/Culttm/a8c3ca85032c4b0cc67037425f150c44
 * @see is-valid-token-middleware.js
 */

let isAlreadyFetchingAccessToken = false
let subscribers = []

function onAccessTokenFetched (accessToken) {
  subscribers = subscribers.filter(callback => callback(accessToken))
}

function addSubscriber (callback) {
  subscribers.push(callback)
}

const interceptor = {
  success: (response) => response,
  error: (error) => {
    const { config, response } = error
    const originalRequest = config
    if (response.status === 401 && 'data' in response.data && response.data.status === 'Token has expired') {
      const retryOriginalRequest = new Promise((resolve) => {
        addSubscriber(accessToken => {
          originalRequest.headers.Authorization = 'Bearer ' + accessToken
          resolve(axios(originalRequest))
        })
      })

      if (!isAlreadyFetchingAccessToken) {
        isAlreadyFetchingAccessToken = true

        RefreshService((response) => {
          if (response != null && response.status === 200 && 'config' in response && 'headers' in response && 'authorization' in response.headers) {
            const nTk = response.headers.authorization.substr(7, response.headers.authorization.length - 7)
            store.dispatch('login', {
              token: nTk
            }).then(() => {
              isAlreadyFetchingAccessToken = false
              onAccessTokenFetched(nTk)
            })
          }
        }, () => {
          isAlreadyFetchingAccessToken = false
        })
      }
      return retryOriginalRequest
    }
    return Promise.reject(error)
  }
}

export default interceptor
