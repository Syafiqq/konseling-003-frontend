import RefreshService from '../../services/auth/refresh-service'
import axios from './common-axios'
import store from '../../../store'

/**
 * @see https://gist.github.com/mkjiau/650013a99c341c9f23ca00ccb213db1c
 * @see https://gist.github.com/Culttm/a8c3ca85032c4b0cc67037425f150c44
 * @see is-valid-token-middleware.js
 */

let isAlreadyFetchingAccessToken = false
let success = []
let failed = []

function onAccessTokenFetched (accessToken) {
  success.filter(callback => callback(accessToken))
  success = []
  failed = []
}

function onRefreshFailed (cause) {
  failed.filter(callback => callback(cause))
  failed = []
  success = []
}

function addSubscriber (sCallback, fCallback) {
  success.push(sCallback)
  failed.push(fCallback)
}

const interceptor = {
  success: (response) => response,
  error: async (failed) => {
    const { config, response } = failed
    const originalRequest = config
    if (response.status === 401 && 'data' in response.data && response.data.status === 'Token has expired') {
      const retryOriginalRequest = new Promise((resolve, reject) => {
        addSubscriber(accessToken => {
          originalRequest.headers.Authorization = 'Bearer ' + accessToken
          resolve(axios(originalRequest))
        }, cause => {
          reject(cause)
        })
      })

      if (!isAlreadyFetchingAccessToken) {
        isAlreadyFetchingAccessToken = true

        await RefreshService((rRes) => {
          if (rRes != null && rRes.status === 200 && 'config' in rRes && 'headers' in rRes && 'authorization' in rRes.headers) {
            const nTk = rRes.headers.authorization.substr(7, rRes.headers.authorization.length - 7)
            store.dispatch('login', {
              token: nTk
            }).then(() => {
              isAlreadyFetchingAccessToken = false
              onAccessTokenFetched(nTk)
            })
          } else {
            isAlreadyFetchingAccessToken = false
            onRefreshFailed(rRes)
          }
        }, (rFailed) => {
          isAlreadyFetchingAccessToken = false
          onRefreshFailed(rFailed)
        })
      }
      return retryOriginalRequest
    }
    return Promise.reject(failed)
  }
}

export default interceptor
