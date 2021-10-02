import React, { useContext, useState } from 'react'
import { notification } from 'antd'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import { UserContext } from '../../../contexts/userContext'
import { loginUser } from '../../../store/auth/AuthApis'
import { Link, useHistory } from 'react-router-dom'
import { WebStorage } from '../../../utils/webStorage'
import { WebStorageNames } from '../../../utils/Constants'

const SignInForm = () => {
  const SignupSchema = Yup.object().shape({
    password: Yup.string()
      .min(8, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required')
  })

  const validateEmail = (value) => {
    let error
    if (!value) {
      error = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = 'This is not a valid e-mail'
    }
    return error
  }

  const [, setUserContext] = useContext(UserContext)
  const [errorMessage, setErrorMessage] = useState('')
  const [isSubmit, setIsSubmit] = useState(false)
  const { push } = useHistory()

  const onSubmit = async (values) => {
    try {
      setErrorMessage('')
      setIsSubmit(true)
      const { data } = await loginUser(values)
      setUserContext((oldValues) => ({
        ...oldValues,
        ...data.user,
        token: data.tokens.access.token
      }))
      WebStorage.setLocalStore(WebStorageNames.UserInfo, data.user)
      WebStorage.setLocalStore(WebStorageNames.AuthInfo, {
        accessToken: data.tokens.access.token,
        refreshToken: data.tokens.refresh.token
      })
      notification.success({ message: 'Signed in successfully!' })
      push('/')
    } catch (error) {
      setIsSubmit(false)
      setErrorMessage(error.response.data.message)
    }
  }

  return (
    <Formik
      initialValues={{
        email: '',
        password: ''
      }}
      validationSchema={SignupSchema}
      onSubmit={onSubmit}
    >
      {({ errors, touched, values }) => (
        <Form>
          {errorMessage && <span className="error-msg">{errorMessage}</span>}
          <div className="field-wrapper">
            <p className="label">E-mail</p>
            <Field
              className="form__input"
              name="email"
              type="text"
              placeholder="yourmail@gamil.com"
              validate={validateEmail}
            />
            {errors.email && touched.email ? (
              <span className="error-msg">{errors.email}</span>
            ) : null}
          </div>
          <div className="field-wrapper">
            <p className="label">Password</p>
            <Field className="form__input" name="password" type="password" />
            {errors.password && touched.password ? (
              <span className="error-msg">{errors.password}</span>
            ) : null}
          </div>
          <Link to="/forget-password" className="forget-password">
            Forgot Password
          </Link>
          <div className="submit-buttons sign-in profile-buttons">
            <button className="submit-btn" type="submit" disabled={isSubmit}>
              {!isSubmit && 'Sign In'}
              {isSubmit && 'Signing In..'}
            </button>
          </div>
        </Form>
      )}
    </Formik>
  )
}

export default SignInForm
