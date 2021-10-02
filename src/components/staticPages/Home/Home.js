import React from 'react'
import './Home.scss'
import Container from '../../common/MainContainer/Container'
import { HomePageData } from '../../../utils/HomeData'
import { Link } from 'react-router-dom'
import OddEvenSections from '../../common/OddEvenImgSection/OddEvenImgSection'
import LearningCards from '../../common/LearningCard/LearningCards'

const Home = () => {
  const {
    dummyImg,
    mainHeading,
    subHeading,
    debugCodeHeading,
    debugSubHeading,
    tiles,
    companyLogo,
    cardsData,
    tilesBottom
  } = HomePageData

  return (
    <>
      <Container className="home-container">
        <div className="home-wrapper">
          <div className="sub-section__one">
            <div className="left-side">
              <p
                className="heading"
                dangerouslySetInnerHTML={{ __html: mainHeading }}
              ></p>
              <p
                className="sub-heading"
                dangerouslySetInnerHTML={{ __html: subHeading }}
              ></p>
              <Link to="/" className="btn-link btn">
                learn
              </Link>
            </div>
            <div className="right-side">
              <img src={dummyImg} />
            </div>
          </div>
          <div className="sub-section__two">
            <p
              className="heading"
              dangerouslySetInnerHTML={{ __html: debugCodeHeading }}
            ></p>
            <p
              className="sub-heading"
              dangerouslySetInnerHTML={{ __html: debugSubHeading }}
            ></p>
            <div className="img">
              <img src={dummyImg} />
            </div>
            <Link to="/" className="try-now-btn btn">
              try now
            </Link>
          </div>
          <div className="sub-section__three">
            <OddEvenSections tiles={tiles} />
          </div>
          <div className="logo-section">
            {companyLogo &&
              companyLogo.map((logos, i) => {
                const { logo = {} } = logos
                return (
                  <div className="logo-tile" key={i}>
                    <Link to={logo.url}>
                      <img src={logo.img} />
                    </Link>
                  </div>
                )
              })}
          </div>
          <div className="learning-card-section">
            <LearningCards cardsData={cardsData} />
          </div>

          <div className="sub-section__three">
            <OddEvenSections tiles={tilesBottom} />
          </div>
        </div>
      </Container>
    </>
  )
}

export default Home
