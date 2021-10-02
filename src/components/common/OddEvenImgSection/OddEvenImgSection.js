import React from 'react'
import { Link } from 'react-router-dom'
import './OddEven.scss'

const OddEvenSections = ({ tiles }) => {
  return (
    <>
      {tiles &&
        tiles.length &&
        tiles.map((tile, index) => {
          const { title, icon, subTitle, text, btnLabel, image, background } =
            tile
          console.log('background', background)
          const odd = index % 2

          return (
            <div
              key={`text-image-row-${index}`}
              className={`main ${odd ? 'row-odd' : 'row-even'}`}
              style={{ backgroundColor: background }}
            >
              <div className="content-detail inner-sec">
                <div className="text-image-container">
                  <div className="icon">{icon && <img src={icon} />}</div>
                  <p className="text-image-container__title">{title}</p>
                  {subTitle && (
                    <p className="text-image-container__sub-title">
                      {subTitle}
                    </p>
                  )}
                  {text && <p className="text-image-container__text">{text}</p>}
                  {btnLabel && (
                    <Link to={btnLabel.url} className="btn">
                      {btnLabel.label}
                    </Link>
                  )}
                </div>
              </div>
              <div className="img-section inner-sec">
                <img src={image.url} className={odd ? 'odd-image-wrap' : ''} />
              </div>
            </div>
          )
        })}
    </>
  )
}

export default OddEvenSections
