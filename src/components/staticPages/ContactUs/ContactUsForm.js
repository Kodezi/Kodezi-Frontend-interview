import React from 'react'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'

const ContactUsForm = () => {
  const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(1, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    lastName: Yup.string()
      .min(1, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    address: Yup.string()
      .min(1, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    phone: Yup.string()
      .min(11, 'Too Short!')
      .max(11, 'Too Long!')
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

  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        address: ''
      }}
      validationSchema={SignupSchema}
      onSubmit={async (values) => {
        console.log('valuse:', values)
      }}
    >
      {({ errors, touched, values }) => (
        <Form>
          <div className="custom-flex field-wrapper">
            <div className="column">
              <div className="input-icon-position">
                <Field
                  className="form__input"
                  name="phone"
                  type="number"
                  placeholder="+8801778968398"
                />
                <p className="input-icon">
                  <i className="fa fa-phone" aria-hidden="true"></i>
                </p>
              </div>
              {errors.phone && touched.phone ? (
                <span className="error-msg">{errors.phone}</span>
              ) : null}
            </div>
            <div className="column">
              <div className="input-icon-position">
                <Field
                  className="form__input"
                  name="email"
                  type="text"
                  placeholder="yourmail@gamil.com"
                  validate={validateEmail}
                />
                <p className="input-icon">
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                </p>
              </div>
              {errors.email && touched.email ? (
                <span className="error-msg">{errors.email}</span>
              ) : null}
            </div>
          </div>
          <div className="field-wrapper">
            <div className="input-icon-position">
              <Field
                className="form__input"
                name="address"
                type="text"
                placeholder="Your long address goes here"
              />
              <p className="input-icon address">
                <i className="fa fa-map-marker" aria-hidden="true"></i>
              </p>
            </div>
            {errors.address && touched.address ? (
              <span className="error-msg">{errors.address}</span>
            ) : null}
          </div>
          <div className="custom-flex field-wrapper">
            <div className="column">
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
            <div className="column text-area">
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
          <div className="field-wrapper text-area">
            <Field
              className="form__input"
              name="textarea"
              type="text"
              as="textarea"
              placeholder="Writte here somehting"
            />
          </div>
          <div className="contact-us-submit">
            <button className="submit-btn" type="submit">
              Send
            </button>
          </div>
        </Form>
      )}
    </Formik>
  )
}

export default ContactUsForm
