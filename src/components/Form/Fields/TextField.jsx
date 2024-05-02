import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { InputText, Label } from '@/components/Form'
import { FieldMessage } from '@/components/Form/Fields/FieldMessage'
import { twMerge } from 'tailwind-merge'

export const TextField = ({ name, onChange, noMargins, label, value, className, id, isDisabled, errorMessage, ...rest }) => {
  const isInvalid = errorMessage !== ''
  const labelClasses = isInvalid ? 'text-negative' : ''

  return (
    <div className={twMerge(classNames({ 'mb-3': !noMargins }, className))}>
      <Label className={twMerge(classNames(labelClasses))} text={label} htmlFor={id ?? name} isInvalid={isInvalid} />
      <InputText
        type='text'
        onChange={onChange}
        value={value}
        id={id ?? name}
        name={name}
        isDisabled={isDisabled}
        isInvalid={isInvalid}
        {...rest}
      />
      {isInvalid && <FieldMessage message={errorMessage} />}
    </div>
  )
}

TextField.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
  isDisabled: PropTypes.bool,
  errorMessage: PropTypes.string,
  noMargins: PropTypes.bool,
}

TextField.defaultProps = {
  className: '',
  isDisabled: false,
  errorMessage: '',
  noMargins: false,
}
