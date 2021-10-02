import React from 'react'
import { Tabs } from 'antd'
import ImgWithText from '../common/img-with-text/ImgWithText'
import ExampleIcon from '../../assets/icons/example'
import StartUsingIcon from '../../assets/icons/starUsing'
import CopyIcon from '../../assets/icons/copy'
import CodingForm from './CodingForm'
import { codeAITypesData, codeAITypesMap } from '../../utils/codeAI'

const ExplainCodeTabs = ({ activeTabKey, setActiveTabKey, aiType }) => {
  const { TabPane } = Tabs
  const { inputCard, outputCard, exampleData } =
    codeAITypesData[codeAITypesMap[aiType]]

  const changeTab = (activeKey) => {
    setActiveTabKey(activeKey)
  }

  const renderStartUsingHeading = () => {
    return (
      <p>
        <StartUsingIcon />
        Start Using
      </p>
    )
  }

  const renderExampleHeading = () => {
    return (
      <p>
        <ExampleIcon />
        Example
      </p>
    )
  }

  const bottomTcons = () => {
    return (
      <div className="card-bottom">
        <div className="copy-btn">
          <button>
            <CopyIcon />
          </button>
        </div>

        <div className="copy-btn">
          <button>
            <ExampleIcon />
          </button>
        </div>
      </div>
    )
  }

  const tabSectionOne = () => {
    return (
      <TabPane tab={renderStartUsingHeading()} key="1">
        <div className="tabs-body-wrapper">
          <div className="left-side inner-wrapper">
            <div className="content-wrapper">
              <ImgWithText
                imgUrl="/images/tick.png"
                heading={inputCard.heading}
                subHeading={inputCard.subHeading}
              />
              <CodingForm inputCard={inputCard} />
            </div>
          </div>

          <div className="right-side inner-wrapper">
            <div>
              <ImgWithText
                imgUrl="/images/angle-right.png"
                heading={outputCard.heading}
                subHeading={outputCard.subHeading}
                iconwithColor={true}
                backColor="#000"
              />

              <div className="detail"></div>
            </div>
            {bottomTcons && bottomTcons()}
          </div>
        </div>
      </TabPane>
    )
  }

  const tabSectionTwo = () => {
    return (
      <TabPane tab={renderExampleHeading()} key="2">
        <div className="tabs-body-wrapper">
          <div className="left-side inner-wrapper">
            <div className="content-wrapper">
              <ImgWithText
                imgUrl="/images/tick.png"
                heading="Example"
                subHeading="Write details about your code below"
              />

              <CodingForm inputCard={inputCard} exampleData={exampleData} />
            </div>
          </div>

          <div className="right-side inner-wrapper">
            <div>
              <ImgWithText
                imgUrl="/images/command-s.png"
                heading={outputCard.heading}
                subHeading={outputCard.subHeading}
                iconwithColor={true}
                backColor="#000"
              />
              <div className="detail">
                {exampleData.output &&
                  Array.isArray(exampleData.output) &&
                  exampleData.output.map((item) => {
                    const { label } = item
                    return (
                      <ImgWithText
                        key={label}
                        subHeading={label}
                        iconwithColor={false}
                      />
                    )
                  })}
                {exampleData.output && !Array.isArray(exampleData.output) && (
                  <ImgWithText
                    subHeading={exampleData.output}
                    iconwithColor={false}
                  />
                )}
              </div>
            </div>

            {bottomTcons && bottomTcons()}
          </div>
        </div>
      </TabPane>
    )
  }

  const renderTabsSection = () => {
    return (
      <Tabs defaultActiveKey="1" activeKey={activeTabKey} onChange={changeTab}>
        {tabSectionOne && tabSectionOne()}
        {tabSectionTwo && tabSectionTwo()}
      </Tabs>
    )
  }

  return (
    <>
      <div className="main-tabs">
        {renderTabsSection && renderTabsSection()}
      </div>
    </>
  )
}

export default ExplainCodeTabs
