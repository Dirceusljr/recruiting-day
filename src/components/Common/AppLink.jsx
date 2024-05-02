import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export const AppLink = ({ text, href, className, ...rest }) => {
  const linkClasses = classNames('text-blue-700 text-lg underline underline-offset-2', className)

  return (
    <a href={href} className={linkClasses} {...rest}>
      {text}
    </a>
  )
}

AppLink.propTypes = {
  text: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  className: PropTypes.string,
}
