import React, { useState } from 'react'
import './ExplainCode.scss'

import BackBtnIcon from '../../assets/icons/backBtn'
import Container from '../common/MainContainer/Container'
import ExplainCodeSubHeader from './ExplainCodeSubHeader'

import { getSubHeaderData, codeAITypesMap } from '../../utils/codeAI'
import ExplainCodeTabs from './explainCodeTabs'

const ExplainCode = ({ match, history }) => {
  const {
    params: { aiType }
  } = match
  if (!codeAITypesMap[aiType]) {
    history.push('/404')
    return false
  }
  const [activeTabKey, setActiveTabKey] = useState('1')
  const { subHeaderImg, subHeaderTitle, subHeaderSubTitle } =
    getSubHeaderData(aiType)

  return (
    <>
      <ExplainCodeSubHeader
        imgUrl={subHeaderImg}
        heading={subHeaderTitle}
        subHeading={subHeaderSubTitle}
      />
      <Container>
        <div className="explain-code-wrapper">
          <button className="back-btn">
            <BackBtnIcon />
          </button>

          <div className="main-tabs">
            <ExplainCodeTabs
              aiType={aiType}
              activeTabKey={activeTabKey}
              setActiveTabKey={setActiveTabKey}
            />
          </div>
        </div>
      </Container>
    </>
  )
}

export default ExplainCode
