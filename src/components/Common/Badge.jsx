import classNames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'

export const Badge = ({ text, size = 'base', textColor = 'text-white', bg = 'bg-gray-400', className, onClick }) => {
  let sizeClasses

  switch (size) {
    case 'sm':
      sizeClasses = 'py-1 px-2 text-sm'
      break
    case 'md':
      sizeClasses = 'py-2 px-3 text-md'
      break
    case 'lg':
      sizeClasses = 'py-3 px-4 text-lg'
      break
    default:
      sizeClasses = 'py-1 px-2 text-sm'
      break
  }

  return (
    <span onClick={onClick} className={classNames(`text-center font-bold rounded ${sizeClasses} ${textColor} ${bg}`, className)}>
      {text}
    </span>
  )
}

Badge.propTypes = {
  text: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['base', 'md', 'lg']),
  bg: PropTypes.string,
  textColor: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
}

Badge.defaultProps = {
  text: 'Badge',
  size: 'base',
  bg: 'bg-gray-400',
  textColor: 'text-white',
}
