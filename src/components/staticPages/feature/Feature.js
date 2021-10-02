import React from 'react'
import './Feature.scss'
import Container from '../../common/MainContainer/Container'
import { FeatureData } from '../../../utils/FeatureData'
import OddEvenSections from '../../common/OddEvenImgSection/OddEvenImgSection'
import LearningCards from '../../common/LearningCard/LearningCards'

const Home = () => {
  const { cardsData, tiles } = FeatureData

  return (
    <>
      <Container className="feature-container">
        <div className="feature-wrapper">
          <p className="heading">Our Features</p>

          <p className="sub-heading">Programming</p>
          <div className="feature-card-section">
            <LearningCards cardsData={cardsData} cornerImg={true} />
          </div>

          <p className="sub-heading second">Written Content</p>
          <div className="feature-card-section">
            <LearningCards cardsData={cardsData} cornerImg={true} />
          </div>

          <div className="feature-tiles">
            <OddEvenSections tiles={tiles} />
          </div>
        </div>
      </Container>
    </>
  )
}

export default Home
