import React, { Suspense, useContext, useEffect, useState } from 'react'
import { Router, Switch, Route, Redirect } from 'react-router-dom'
import history from './History'
import Loader from '../components/common/Loader/Loader'
import { UserContext } from '../contexts/userContext'
import Home from '../components/staticPages/Home/Home'
import SignIn from '../components/auth/SignIn/index'
import VerifyEmail from '../components/auth/VerifyEmail/VerifyEmail'
import ExplainCode from '../components/ExplainCode/ExplainCode'
import Header from '../components/common/Header/Header'
import Footer from '../components/common/footer/Footer'
import ForgetPassword from '../components/auth/ForgetPassword/ForgetPassword'
import ContactUs from '../components/staticPages/ContactUs/ContactUs'
import NotFound from '../components/staticPages/NotFound/NotFound'
import PrivacyPolicy from '../components/staticPages/PrivacyPolicy/PrivacyPolicy'
import PrivateRoute from './PrivateRoute'
import NewPassword from '../components/auth/NewPassword/NewPassword'
import { WebStorage } from '../utils/webStorage'
import Feature from '../components/staticPages/feature/Feature'
import Pricing from '../components/staticPages/Pricing/Pricing'

const AppRouter = () => {
  const [, setUserContext] = useContext(UserContext)
  const [loading, setLoading] = useState(true)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const loggedUser = WebStorage.getLocalUserInfo()
  const loggedAuthInfo = WebStorage.getLocalAuthInfo()
  useEffect(() => {
    if (loggedUser && loggedAuthInfo) {
      setUserContext((oldValues) => ({
        ...oldValues,
        ...loggedUser,
        token: loggedAuthInfo.accessToken
      }))
      setIsLoggedIn(true)
    }
    setLoading(false)
  }, [])

  return (
    <>
      {!loading && (
        <Suspense fallback={<Loader />}>
          <Router history={history}>
            <Header />
            <Switch>
              <Home exact path="/" />
              <PrivateRoute
                exact
                path="/code-ai/:aiType"
                component={ExplainCode}
                isLoggedIn
              />
              <Route
                path="/login"
                exact
                render={(props) =>
                  isLoggedIn ? (
                    <Redirect to="/contact-us" />
                  ) : (
                    <SignIn showSignIn={true} {...props} />
                  )
                }
              />
              <Route
                path="/register"
                exact
                render={(props) =>
                  isLoggedIn ? (
                    <Redirect to="/" />
                  ) : (
                    <SignIn showSignIn={false} {...props} />
                  )
                }
              />
              <VerifyEmail path="/verify-email" exact />
              <ForgetPassword path="/forget-password" exact />
              <NewPassword path="/reset-password" exact />
              <ContactUs path="/contact-us" exact />
              <PrivacyPolicy path="/privacy-policy" exact />
              <Feature path="/feature" exact />
              <Pricing path="/pricing" exact />
              <NotFound path="*" />
            </Switch>
            <Footer />
          </Router>
        </Suspense>
      )}
    </>
  )
}

export default AppRouter
