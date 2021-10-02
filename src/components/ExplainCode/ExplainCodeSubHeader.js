import React from 'react'
import './ExplainCode.scss'
import ImgWithText from '../common/img-with-text/ImgWithText'

const ExplainCodeSubHeader = ({ imgUrl, heading, subHeading }) => {
  return (
    <div className="sub-header">
      <ImgWithText imgUrl={imgUrl} heading={heading} subHeading={subHeading} />
    </div>
  )
}

export default ExplainCodeSubHeader
