import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import { ContainerMain } from './ContainerStyles'

const Container = ({
  children,
  color,
  fluid,
  className,
  backgroundImage,
  style
}) => {
  const containerClass = cx('section-container', className, {
    'with-background-image': backgroundImage,
    fluid: fluid
  })

  return (
    <ContainerMain
      color={color}
      backgroundImage={backgroundImage}
      className={containerClass}
      style={style}
    >
      <div className="page-width">{children}</div>
    </ContainerMain>
  )
}

const { string, node, object, bool } = PropTypes

Container.defaultProps = {
  children: null,
  color: '',
  className: '',
  backgroundImage: '',
  style: {},
  fluid: false
}

Container.propTypes = {
  children: node.isRequired,
  color: string,
  className: string,
  backgroundImage: string,
  style: object,
  fluid: bool
}

export default Container
