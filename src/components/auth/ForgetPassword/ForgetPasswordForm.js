import React from 'react'
import { Formik, Form, Field } from 'formik'

const ForgetPasswordForm = ({ isSubmit, onSubmit }) => {
  const validateEmail = (value) => {
    let error
    if (!value) {
      error = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = 'This is not a valid e-mail'
    }
    return error
  }

  return (
    <Formik
      initialValues={{
        email: ''
      }}
      onSubmit={onSubmit}
    >
      {({ errors, touched, values }) => (
        <Form>
          <div className="field-wrapper">
            <Field
              className="form__input"
              name="email"
              type="text"
              placeholder={'yourmail@gamil.com'}
              validate={validateEmail}
            />
            <p className="mail-icon">
              <i className="fa fa-envelope" aria-hidden="true"></i>
            </p>
          </div>
          {errors.email && touched.email ? (
            <span className="error-msg">{errors.email}</span>
          ) : null}

          <div>
            <button className="submit-btn" type="submit" disabled={isSubmit}>
              {!isSubmit && 'Send Reset Email'}
              {isSubmit && 'Sending...'}
            </button>
          </div>
        </Form>
      )}
    </Formik>
  )
}

export default ForgetPasswordForm
