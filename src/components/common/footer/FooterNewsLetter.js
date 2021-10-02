import React from 'react'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'

const FooterNewsLetter = () => {
  const SignupSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required')
  })

  return (
    <div className="newsLetter-wrapper">
      <Formik
        initialValues={{
          email: ''
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          console.log('newsletter', values)
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <div className="form-field">
              <Field name="email" type="email" placeholder="your email" />
              <button type="submit">Submit</button>
            </div>
            {errors.email && touched.email ? (
              <p className="error-msg">{errors.email}</p>
            ) : null}
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default FooterNewsLetter
