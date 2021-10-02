import React, { useEffect, useState, useContext } from 'react'
import { notification } from 'antd'
import { useHistory, useLocation } from 'react-router-dom'
import queryString from 'query-string'
import {
  verifyEmail,
  sendVerificationEmail
} from '../../../store/auth/AuthApis'
import ConfirmEmailStatic from './ConfirmEmailStatic'
import { UserContext } from '../../../contexts/userContext'
import './ConfirmEmail.scss'

function VerifyEmail() {
  const [userContext] = useContext(UserContext)
  const { search } = useLocation()
  const { push } = useHistory()
  const { token } = queryString.parse(search)
  const [isEmailVerified, setIsEmailVerified] = useState(false)

  const verifyUserEmail = async () => {
    try {
      await verifyEmail(token)
      setIsEmailVerified(true)
    } catch (error) {
      setIsEmailVerified(false)
    }
  }

  const resendEmailVerification = async () => {
    try {
      await sendVerificationEmail(userContext.token)
      notification.success({
        message: 'Resent verification email successfully!'
      })
      push('/verify-email')
    } catch (error) {
      notification.error({
        message: 'Could not send verification email. Please try again later.'
      })
    }
  }

  useEffect(() => {
    if (token) {
      verifyUserEmail(token)
    }
  }, [token])
  return (
    <div>
      {token && isEmailVerified && (
        <ConfirmEmailStatic
          confirmEmailImg={true}
          heading="Thank You For The Confirmation"
          subHeading=""
          gmailBtn={false}
          goToHomeBtn={true}
          goToHomeBtnLabel="Go home page"
        />
      )}
      {token && !isEmailVerified && (
        <ConfirmEmailStatic
          confirmEmailImg={true}
          heading=" Email verfication unsucessful "
          subHeading="We are unable to verify email. Plese very your email again."
          gmailBtn={false}
          customBtn={true}
          customBtnLabel="Verify email agian"
          onClickCustomBtn={resendEmailVerification}
          goToHomeBtn={true}
          goToHomeBtnLabel="Go home page"
        />
      )}
      {!token && (
        <ConfirmEmailStatic
          confirmEmailImg={true}
          heading="Confirm your email"
          subHeading={`Thanks for Registetion, Please chick on the email.
            <br className="break" /> Confirmation link to activate your account.`}
          gmailBtn={true}
          gmailBtnLabel="Open gmail"
          gmailBtnLink="https://mail.google.com/mail/"
          outLookBtn={true}
          outLookBtnLabel="Open outlook"
          outLookBtnLink="https://outlook.live.com/"
        />
      )}
    </div>
  )
}

export default VerifyEmail
