import React, { useContext, useState } from 'react'
import { notification } from 'antd'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import { UserContext } from '../../../contexts/userContext'
import { registerUser } from '../../../store/auth/AuthApis'
import { useHistory } from 'react-router-dom'
import { WebStorage } from '../../../utils/webStorage'
import { WebStorageNames } from '../../../utils/Constants'

const SignUpForm = () => {
  const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(1, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    lastName: Yup.string()
      .min(1, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    userName: Yup.string()
      .min(1, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
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
      const { data } = await registerUser(values)
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
      notification.success({ message: 'Sign up successfully!' })
      push('/')
    } catch (error) {
      setIsSubmit(false)
      setErrorMessage(error.response.data.message)
    }
  }

  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        userName: '',
        email: '',
        password: ''
      }}
      validationSchema={SignupSchema}
      onSubmit={onSubmit}
    >
      {({ errors, touched, values }) => (
        <Form>
          {errorMessage && <span className="error-msg">{errorMessage}</span>}
          <div className="custom-flex field-wrapper">
            <div className="column">
              <p className="label">First Name</p>
              <Field
                className="form__input"
                name="firstName"
                type="text"
                placeholder="Your First Name"
              />
              {errors.firstName && touched.firstName ? (
                <span className="error-msg">{errors.firstName}</span>
              ) : null}
            </div>
            <div className="column">
              <p className="label">Last Name</p>
              <Field
                className="form__input"
                name="lastName"
                type="text"
                placeholder="Your Last Name"
              />
              {errors.lastName && touched.lastName ? (
                <span className="error-msg">{errors.lastName}</span>
              ) : null}
            </div>
          </div>
          <div className="custom-flex field-wrapper">
            <div className="column">
              <p className="label">User Name</p>
              <Field
                className="form__input"
                name="userName"
                type="text"
                placeholder="usename 123"
              />
              {errors.userName && touched.userName ? (
                <span className="error-msg">{errors.userName}</span>
              ) : null}
            </div>
            <div className="column">
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
          </div>
          <div className="field-wrapper">
            <p className="label">Password</p>
            <Field className="form__input" name="password" type="password" />
            {errors.password && touched.password ? (
              <span className="error-msg">{errors.password}</span>
            ) : null}
          </div>
          <div className="field-wrapper-checkbox">
            <Field className="form__checkbox" name="checkbox" type="checkbox" />
            <p className="label">
              I agree to the <b>Terms of User</b>
            </p>
          </div>
          <div className="submit-buttons profile-buttons">
            <button className="submit-btn" type="submit" disabled={isSubmit}>
              {!isSubmit && 'Sign Up'}
              {isSubmit && 'Signing Up..'}
            </button>
          </div>
        </Form>
      )}
    </Formik>
  )
}

export default SignUpForm
