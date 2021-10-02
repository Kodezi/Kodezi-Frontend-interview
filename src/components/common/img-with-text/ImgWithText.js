import React from 'react'
import './ImgWithText.scss'

const ImgWithText = ({
  imgUrl,
  heading,
  subHeading,
  iconwithColor,
  backColor
}) => {
  return (
    <div className="img-with-text">
      {iconwithColor ? (
        <div className="icon-with-color" style={{ backgroundColor: backColor }}>
          {imgUrl && <img src={imgUrl} alt="icon" />}
        </div>
      ) : (
        <div className="img">{imgUrl && <img src={imgUrl} alt="icon" />}</div>
      )}
      <div className="content">
        <h4>{heading}</h4>
        <p dangerouslySetInnerHTML={{ __html: subHeading }}></p>
      </div>
    </div>
  )
}

export default ImgWithText
