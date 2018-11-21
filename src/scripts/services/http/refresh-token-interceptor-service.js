import RefreshService from '../../services/auth/refresh-service'
import axios from './common-axios'
import store from '../../../store'

/**
 * @see https://gist.github.com/mkjiau/650013a99c341c9f23ca00ccb213db1c
 * @see https://gist.github.com/Culttm/a8c3ca85032c4b0cc67037425f150c44
 * @see is-valid-token-middleware.js
 */

let isAlreadyFetchingAccessToken = false
let subscriber = []

function onAccessTokenFetched (token) {
  subscriber.filter(callback => callback(token, null))
  subscriber = []
}

function onRefreshFailed (cause) {
  subscriber.filter(callback => callback(null, cause))
  subscriber = []
}

function addSubscriber (callback) {
  subscriber.push(callback)
}

const interceptor = {
  success: (response) => response,
  error: async (failed) => {
    const { config, response } = failed
    const originalRequest = config
    if (response.status === 401 && 'data' in response.data && response.data.status === 'Token has expired') {
      const retryOriginalRequest = new Promise((resolve, reject) => {
        addSubscriber((token, cause) => {
          if (token) {
            originalRequest.headers.Authorization = 'Bearer ' + token
            resolve(axios(originalRequest))
          } else {
            reject(cause)
          }
        })
      })

      if (!isAlreadyFetchingAccessToken) {
        isAlreadyFetchingAccessToken = true

        await RefreshService((response) => {
          if (response != null && response.status === 200 && 'config' in response && 'headers' in response && 'authorization' in response.headers) {
            const nTk = response.headers.authorization.substr(7, response.headers.authorization.length - 7)
            store.dispatch('create_token', nTk).then(() => {
              onAccessTokenFetched(nTk)
            })
          } else {
            onRefreshFailed(response)
          }
        }, (failed) => {
          onRefreshFailed(failed)
        }, () => {
          isAlreadyFetchingAccessToken = false
        })
      }
      return retryOriginalRequest
    }
    return Promise.reject(failed)
  }
}

export default interceptor
