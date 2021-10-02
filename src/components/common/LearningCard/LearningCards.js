import React from 'react'
import './LearningCards.scss'

const LearningCards = ({ cardsData, cornerImg }) => {
  const { heading, subHeading, para, cards } = cardsData
  return (
    <div className="learning-card-wrapper">
      {heading && <p className="heading">{heading}</p>}
      {subHeading && <p className="learning-sub-heading">{subHeading}</p>}
      {para && <p className="sub-heading">{para}</p>}
      <div className="cards-wrapper">
        {cards &&
          cards.length &&
          cards.map((card, index) => {
            const { title = '', text = '', image = {} } = card

            return (
              <div key={index} className="single-card">
                <div className="card-detail">
                  <div className="card-icon">
                    <img src={image.url} />
                  </div>
                  <div className="card-content">
                    <p className="card__title">{title}</p>
                    <p className="card__text">{text}</p>
                  </div>
                </div>
                {cornerImg && (
                  <div className="corner-img">
                    <img src="/images/corner.svg" />
                  </div>
                )}
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default LearningCards
