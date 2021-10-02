import axios from 'axios'
import { refreshToken } from '../../store/auth/AuthApis'
import {
  DEV_BASE_URL,
  PROD_BASE_URL,
  WebStorageNames
} from '../../utils/Constants'
import { WebStorage } from '../../utils/webStorage'
import { requestHandler, successHandler } from '../interceptors'

// add your BASE_URL to Constants file
export const axiosInstance = axios.create({
  baseURL:
    process.env.NODE_ENV === 'development' ? DEV_BASE_URL : PROD_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})

// Handle request process
axiosInstance.interceptors.request.use((request) => requestHandler(request))
// Handle response process
const interceptor = axiosInstance.interceptors.response.use(
  (response) => successHandler(response),
  (error) => {
    if (error.response.status === 401) {
      axiosInstance.interceptors.response.eject(interceptor)
      const data = WebStorage.getLocalAuthInfo()
      if (data !== null) {
        console.log('Refreshing token..')
        return refreshToken({ refreshToken: data.refreshToken })
          .then((res) => {
            if (res.data === null) {
              WebStorage.clearUserInfo()
              window.location.href = '/'
              return
            }
            const { access, refresh } = res.data
            const authData = {
              accessToken: access.token,
              refreshToken: refresh.token
            }
            WebStorage.setLocalStore(WebStorageNames.AuthInfo, authData)
            error.response.config.headers.Authorization =
              'Bearer ' + access.token
            return axiosInstance(error.response.config)
          })
          .catch((e) => {
            WebStorage.clearUserInfo()
            window.location.href = '/'
            return Promise.reject(e)
          })
          .finally(axiosInstance.interceptors.response.use(interceptor))
      }
    }
  }
)
