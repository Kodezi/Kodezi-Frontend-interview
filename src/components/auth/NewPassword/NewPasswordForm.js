import React from 'react'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'

const NewPasswordForm = ({ isSubmit, onSubmit }) => {
  const SignupSchema = Yup.object().shape({
    newPassword: Yup.string()
      .min(6, 'Too Short')
      .max(50, 'Too Long!')
      .required('Required'),
    confirmPassword: Yup.string()
      .min(6, 'Too Short')
      .max(50, 'Too Long!')
      .required('Required')
      .when('newPassword', {
        is: (val) => val && val.length > 0,
        then: Yup.string().oneOf(
          [Yup.ref('newPassword')],
          'Confirm Password must be same with New Password'
        )
      })
  })

  return (
    <div className="new-password-form">
      <Formik
        initialValues={{
          newPassword: '',
          confirmPassword: ''
        }}
        validationSchema={SignupSchema}
        onSubmit={onSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <div className="password-feild-wrapper">
              <Field
                className="user-profile-form__input"
                name="newPassword"
                type="password"
                placeholder="New Password"
              />
              {errors.newPassword && touched.newPassword ? (
                <p className="error-msg">{errors.newPassword}</p>
              ) : null}
            </div>
            <div className="password-feild-wrapper">
              <Field
                className="user-profile-form__input"
                name="confirmPassword"
                type="password"
                placeholder="Confirm Password"
              />
              {errors.confirmPassword && touched.confirmPassword ? (
                <p className="error-msg">{errors.confirmPassword}</p>
              ) : null}
            </div>
            <div className="password-submit-btns">
              <button className="submit-btn" type="submit">
                {!isSubmit && 'Reset Password'}
                {isSubmit && 'Reseting...'}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default NewPasswordForm
