import React from 'react'
import PropTypes from 'prop-types'
import { twMerge } from 'tailwind-merge'

export const CheckBox = ({ label, name, onChange, isDisabled, checked, className, labelClassName, textClassName, ...rest }) => {
  const inputClassName = twMerge('p-2', className)
  const lbClassName = twMerge('flex flex-row gap-2 items-baseline', labelClassName)

  return (
    <label htmlFor={name} className={lbClassName}>
      <input
        type='checkbox'
        id={name}
        name={name}
        disabled={isDisabled}
        checked={checked}
        onChange={onChange}
        className={inputClassName}
        {...rest}
      />
      <span className={textClassName}>{label}</span>
    </label>
  )
}

CheckBox.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  checked: PropTypes.bool.isRequired,
  className: PropTypes.string,
  labelClassName: PropTypes.string,
  textClassName: PropTypes.string,
  isDisabled: PropTypes.bool,
}

CheckBox.defaultProps = {
  checked: false,
  isDisabled: false,
}
