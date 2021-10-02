import React from 'react'
import './Pricing.scss'
import Container from '../../common/MainContainer/Container'
import { PricingData } from '../../../utils/PricingData'
import PricingCards from '../../common/pricingCards/PricingCards'

const Pricing = () => {
  const { cards } = PricingData

  return (
    <>
      <Container className="pricing-container">
        <div className="pricing-wrapper">
          <p className="heading">Our plans</p>

          <div className="pricing-card-section">
            <PricingCards cardsData={cards} />
          </div>
        </div>
      </Container>
    </>
  )
}

export default Pricing
