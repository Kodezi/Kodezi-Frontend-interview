import React from 'react'
import ContactUsForm from './ContactUsForm'
import './ContactUs.scss'

const ContactUs = () => {
  return (
    <>
      <div className="contact-us-wrapper">
        <div className="left-side sub-section">
          <div className="hero-img">
            <img src="/images/contact-us.png" alt="hero-img" />
          </div>
        </div>

        <div className="right-side sub-section">
          <h4 className="contact-us-heading">Contact us</h4>
          <p className="sub-heading">
            Feel free to contact us on the mention informatio
          </p>

          <ContactUsForm />
        </div>
      </div>
    </>
  )
}

export default ContactUs
