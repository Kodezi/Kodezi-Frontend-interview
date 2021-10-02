import React, { useContext } from 'react'
import './Header.scss'
import { NavbarData } from '../../data.js'
import { Link } from 'react-router-dom'
import { UserContext } from '../../../contexts/userContext'
import { logOutUser } from '../../../store/auth/AuthApis'
import { WebStorage } from '../../../utils/webStorage'

const Header = () => {
  const [userContext] = useContext(UserContext)

  const onClickLogout = () => {
    logOutUser()
      .then(() => {
        WebStorage.clearUserInfo()
        window.location.href = '/'
      })
      .catch(() => {
        WebStorage.clearUserInfo()
        window.location.href = '/'
      })
  }
  const { logo, navLinks } = NavbarData
  return (
    <div className="navbar-wrapper">
      <Link to="/" className="logo">
        <img src={logo} alt="logo" />
      </Link>
      <div className="nav-links">
        {navLinks &&
          navLinks.map((links, i) => {
            const { label, url } = links
            return (
              <Link to={url} key={i}>
                {label}
              </Link>
            )
          })}
        {userContext.token && (
          <>
            <Link to="/">
              <img src="/images/pricing.svg" />
              <span>$24.68</span>
            </Link>
            <Link to="/" className="user-login">
              <img src="/images/user.svg" />
            </Link>
            <button onClick={onClickLogout}>Sign out</button>
          </>
        )}
        {!userContext.token && (
          <>
            <Link to="/register">Sign Up</Link>
          </>
        )}
      </div>
    </div>
  )
}

export default Header
