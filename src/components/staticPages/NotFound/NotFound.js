import React from 'react'
import { Link } from 'react-router-dom'
import Container from '../../common/MainContainer/Container'
import './Notfound.scss'

const NotFound = () => {
  return (
    <Container className="not-found-container">
      <div className="not-found-wrapper">
        <div className="img">
          <img src="/images/NotFound.png" alt="not-found" />
        </div>
        <h1 className="not-found-heading">Oops! Page not Found</h1>
        <p className="sub-heading">
          After watching a video, you are able to take quizzes based on the
          concept you have learned. Challenge yourself to see if you fully
          grasped the concepts taught!
        </p>
        <div className="not-found-btns">
          <Link to="/">Get Started</Link>
          <Link to="/">Home page</Link>
        </div>
      </div>
    </Container>
  )
}
export default NotFound
