import React from 'react'
import Container from '../../common/MainContainer/Container'
import './PrivacyPolicy.scss'

import { privacyPolicyData } from '../../data'

const PrivacyPolicy = () => {
  const { policyContent } = privacyPolicyData
  return (
    <Container className="privacy-policy-container">
      <div className="privacy-policy-wrapper">
        <div className="img">
          <img src="/images/privacy-policy.png" alt="privacy-policy" />
        </div>
        <div className="policy-content">
          <p dangerouslySetInnerHTML={{ __html: policyContent }}></p>
        </div>
      </div>
    </Container>
  )
}
export default PrivacyPolicy
