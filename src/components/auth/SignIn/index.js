import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { SignInData } from '../../data.js'
import './style.scss'

// import Header from "../common/Header/Header";
import SignUpForm from './SignUpForm'
import SignInForm from './SignInForm'

const SignIn = (props) => {
  const {
    signUpImg,
    signInImg,
    signUpText,
    subDetail,
    signUpHeading,
    signInHeading,
    subTitle,
    signInText
  } = SignInData

  const [showSignInForm, setShowSignInForm] = useState(!!props.showSignIn)
  const { push } = useHistory()
  const handleForms = () => {
    if (showSignInForm) {
      push('/register')
    } else {
      push('/login')
    }
    setShowSignInForm(!showSignInForm)
  }

  return (
    <>
      {/* <Header /> */}
      <div className="sign-in-wrapper">
        <div className="left-side sub-section">
          <div className="hero-img">
            <img src={!showSignInForm ? signUpImg : signInImg} alt="hero-img" />
          </div>
          <h4 className="heading">
            {!showSignInForm ? signUpText : signInText}
          </h4>
          <p className="sub-heading">{subDetail}</p>
          <button className="sign-in-btn" onClick={handleForms}>
            {!showSignInForm ? 'Sign In' : 'Sign Up'}
          </button>
        </div>

        <div className="right-side sub-section">
          <h2 className="heading">
            {!showSignInForm ? signUpHeading : signInHeading}
          </h2>
          <p className="sub-heading">{subTitle}</p>
          <div className="google-login-btns">
            <button>
              <i className="fa fa-google" aria-hidden="true"></i>Sign up with
              Google
            </button>
            <button>
              <i className="fa fa-facebook" aria-hidden="true"></i>Sign up with
              Facebook
            </button>
          </div>
          <div className="or-separate">
            <div className="inner-sep"></div>
            <span>or</span>
            <div className="inner-sep"></div>
          </div>

          {showSignInForm ? (
            <SignInForm showSignInForm={showSignInForm} />
          ) : (
            <SignUpForm showSignInForm={showSignInForm} />
          )}
        </div>
      </div>
    </>
  )
}

export default SignIn
