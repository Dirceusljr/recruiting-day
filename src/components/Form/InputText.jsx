import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { twMerge } from 'tailwind-merge'

export const InputText = ({ name, value, onChange, type, className, isDisabled, isInvalid, ...rest }) => {
  const inputClassName = twMerge(
    classNames(
      'w-full block bg-zinc-50 py-2 px-3 border rounded-lg outline-none transition ease-in-out duration-300 delay-100 focus:border-gray-300',
      className,
      {
        'text-gray-700 border-gray-200': !isInvalid,
        'text-negative border-negative': isInvalid,
        'text-gray-100 opacity-30': isDisabled,
      }
    )
  )
  return (
    <input type={type} name={name} value={value} onChange={onChange} disabled={isDisabled} className={inputClassName} {...rest} />
  )
}

InputText.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
  className: PropTypes.string,
  isDisabled: PropTypes.bool,
  isInvalid: PropTypes.bool,
}

InputText.defaultProps = {
  type: 'text',
  isDisabled: false,
  isInvalid: false,
}
