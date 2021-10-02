import React, { useState } from 'react'
import ForgetPasswordForm from './ForgetPasswordForm'
import { notification } from 'antd'
import Container from '../../common/MainContainer/Container'
import { Link } from 'react-router-dom'
import { forgotPassword } from '../../../store/auth/AuthApis'
import './ForgetPassword.scss'

const ForgetPassword = () => {
  const [success, setSuccess] = useState(false)
  const [isSubmit, setIsSubmit] = useState(false)
  const onSubmitForgetPassword = async (data) => {
    try {
      setIsSubmit(true)
      await forgotPassword(data)
      setIsSubmit(false)
      setSuccess(true)
    } catch (error) {
      setIsSubmit(false)
      notification.error({ message: error.response.data.message })
    }
  }
  return (
    <Container className="forget-password-container">
      <div className="forget-password-wrapper">
        <div className="img">
          <img src="/images/forget-password.png" alt="forget-password-img" />
        </div>
        <p className="heading">
          {success ? 'Sent Reset Email Successful' : 'Forgot your poassword?'}
        </p>
        {success && (
          <Link to="/" className="home-page-link">
            Go home page
          </Link>
        )}
        {!success && (
          <div className="form-wrapper">
            <p className="sub-heading">
              Don’t worry. Type email and we will send a password recovery link
              to your email
            </p>
            <ForgetPasswordForm
              isSubmit={isSubmit}
              onSubmit={onSubmitForgetPassword}
            />
          </div>
        )}
      </div>
    </Container>
  )
}

export default ForgetPassword
