import { axiosInstance } from '../../network/apis'
import { WebStorage } from '../../utils/webStorage'
const handlerEnabled = true

export const registerUser = (registerData) => {
  return axiosInstance.post('/v1/auth/register', registerData, {
    handlerEnabled
  })
}

export const loginUser = (loginData) => {
  return axiosInstance.post('/v1/auth/login', loginData, { handlerEnabled })
}

export const logOutUser = () => {
  const userAuth = WebStorage.getLocalAuthInfo()
  const refreshToken = userAuth ? userAuth.refreshToken : ''
  return axiosInstance.post(
    '/v1/auth/logout',
    { refreshToken },
    { handlerEnabled }
  )
}

export const forgotPassword = (forgotData) => {
  return axiosInstance.post('/v1/auth/forgot-password', forgotData, {
    handlerEnabled
  })
}

export const resetPassword = (token, resetData) => {
  return axiosInstance.post(`/v1/auth/reset-password?token=${token}`, resetData)
}

export const sendVerificationEmail = (token) => {
  return axiosInstance.post(
    '/v1/auth/send-verification-email',
    {},
    { headers: { Authorization: 'Bearer ' + token } }
  )
}

export const verifyEmail = (token) => {
  return axiosInstance.post(`/v1/auth/verify-email?token=${token}`, {
    handlerEnabled
  })
}

export const refreshToken = (requestBody) => {
  return axiosInstance.post('/v1/auth/refresh-tokens', requestBody, {
    handlerEnabled
  })
}
