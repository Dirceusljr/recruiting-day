import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { twMerge } from 'tailwind-merge'

export const Textarea = ({ name, className, value, onChange, isDisabled, isInvalid, ...rest }) => {
  const { id } = rest
  const inputClassName = classNames(
    'w-full block bg-zinc-50 py-2 px-3 border rounded-lg min-h-[140px] outline-none transition ease-in-out duration-300 delay-100 focus:border-gray-300',
    className,
    {
      'text-gray-700 border-gray-200': !isInvalid,
      'text-negative border-negative': isInvalid,
      'text-gray-100 opacity-30': isDisabled,
    }
  )
  return (
    <textarea
      name={name}
      id={id ?? name}
      value={value}
      onChange={onChange}
      disabled={isDisabled}
      className={twMerge(inputClassName)}
      {...rest}
    />
  )
}

Textarea.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
  isDisabled: PropTypes.bool,
  isInvalid: PropTypes.bool,
}

Textarea.defaultProps = {
  isDisabled: false,
  isInvalid: false,
}
