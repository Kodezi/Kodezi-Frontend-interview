import React from 'react'
import { Link } from 'react-router-dom'

const PricingCards = ({ cardsData }) => {
  return (
    <div className="learning-card-wrapper">
      <div className="cards-wrapper">
        {cardsData &&
          cardsData.length &&
          cardsData.map((card, index) => {
            const {
              status,
              price,
              pricePerMonth,
              subHeading,
              iconText,
              pricingButton
            } = card

            return (
              <div key={index} className="single-card">
                <div className="card-detail">
                  {status && <p className="status">{status}</p>}
                  {price && (
                    <p className="heading">
                      {price}
                      <span>{pricePerMonth}</span>
                    </p>
                  )}
                  {subHeading && <p className="sub-heading">{subHeading}</p>}
                  <div className="points">
                    {iconText &&
                      iconText.map((icontext, index) => {
                        const { icon, boldText, text } = icontext
                        return (
                          <div className="custom-flex" key={index}>
                            <div className="card-icon">
                              <img src={icon} />
                            </div>
                            <div className="card-content">
                              {boldText && (
                                <p
                                  className="card__title"
                                  dangerouslySetInnerHTML={{ __html: boldText }}
                                ></p>
                              )}
                              {text && <p className="card__text">{text}</p>}
                            </div>
                          </div>
                        )
                      })}
                  </div>
                </div>
                {pricingButton && (
                  <div className="pricing-btn">
                    <Link to={pricingButton.url}>{pricingButton.label}</Link>
                  </div>
                )}
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default PricingCards
