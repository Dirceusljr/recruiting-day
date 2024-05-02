import React, { useEffect, useState } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { twMerge } from 'tailwind-merge'

export const Toggle = ({ isToggled, onChange }) => {
  const [isChecked, setIsChecked] = useState(false)

  useEffect(() => setIsChecked(isToggled), [])

  const handleToggle = e => {
    setIsChecked(!isChecked)
    e.isToggled = isChecked
    onChange(e)
  }

  const buttonClasses = classNames('bg-gray-200 flex items-center justify-start w-12 h-4 rounded-full px-1', {
    'justify-end': isChecked,
  })

  const innerCircleClasses = classNames('w-3 h-3 rounded-full', {
    'bg-primary': isChecked,
    'bg-white': !isChecked,
  })

  return (
    <button type='button' className={twMerge(buttonClasses)} onClick={handleToggle}>
      <span className={twMerge(innerCircleClasses)} />
    </button>
  )
}

Toggle.propTypes = {
  isToggled: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
}

Toggle.defaultProps = {
  isToggled: false,
  onChange: () => {},
}
