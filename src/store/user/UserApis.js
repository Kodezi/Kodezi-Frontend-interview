import { axiosInstance } from '../../network/apis'
import { WebStorage } from '../../utils/webStorage'

export const getUser = () => {
  const userAuth = WebStorage.getLocalAuthInfo()
  const token = userAuth ? userAuth.accessToken : ''
  return axiosInstance.get('/v1/users/me', {
    headers: { Authorization: 'Bearer ' + token }
  })
}
