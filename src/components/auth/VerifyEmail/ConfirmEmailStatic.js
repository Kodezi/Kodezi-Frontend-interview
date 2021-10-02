import React from 'react'
import { Link } from 'react-router-dom'
import Container from '../../common/MainContainer/Container'

const ConfirmEmailStatic = ({
  confirmEmailImg,
  heading,
  subHeading,
  gmailBtn,
  gmailBtnLabel,
  gmailBtnLink,
  outLookBtn,
  outLookBtnLabel,
  outLookBtnLink,
  goToHomeBtn,
  goToHomeBtnLabel,
  customBtn,
  customBtnLabel,
  onClickCustomBtn
}) => {
  return (
    <Container className="confrim-email-container">
      <div className="confirm-email-wrapper">
        <div className="img">
          <img
            src={`${
              confirmEmailImg
                ? '/images/confirm-email.png'
                : '/images/unconfirm-email.png'
            }`}
            alt="confirm-email-img"
          />
        </div>
        {heading && <p className="heading">{heading}</p>}
        {subHeading && (
          <p
            className="sub-heading"
            dangerouslySetInnerHTML={{ __html: subHeading }}
          ></p>
        )}
        <div className="confrim-email-btns">
          {gmailBtn && (
            <a href={gmailBtnLink} className="dark-btn">
              {gmailBtnLabel}
            </a>
          )}
          {outLookBtn && (
            <a href={outLookBtnLink} className="transparent-btn">
              {outLookBtnLabel}
            </a>
          )}
          {customBtn && (
            <button onClick={onClickCustomBtn} className="dark-btn">
              {customBtnLabel}
            </button>
          )}
          {goToHomeBtn && (
            <Link to="/" className="transparent-btn">
              {goToHomeBtnLabel}
            </Link>
          )}
        </div>
      </div>
    </Container>
  )
}

export default ConfirmEmailStatic
