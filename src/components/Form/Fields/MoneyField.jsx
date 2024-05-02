import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Label, MoneyAsInput } from '@/components/Form'
import { FieldMessage } from '@/components/Form/Fields/FieldMessage'
import { twMerge } from 'tailwind-merge'

export const MoneyField = ({ name, onChange, noMargins, label, value, isDisabled, errorMessage, ...rest }) => {
  const { className, id } = rest
  const labelClasses = errorMessage !== '' ? 'text-negative' : ''

  return (
    <div className={twMerge(classNames({ 'mb-3': !noMargins }, className))}>
      <Label className={twMerge(classNames(labelClasses))} text={label} htmlFor={id ?? name} isInvalid={errorMessage !== ''} />
      <MoneyAsInput
        isInvalid={errorMessage !== ''}
        onChange={onChange}
        value={value}
        name={name}
        disabled={isDisabled}
        {...rest}
      />
      {errorMessage && <FieldMessage message={errorMessage} />}
    </div>
  )
}

MoneyField.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
  isDisabled: PropTypes.bool,
  errorMessage: PropTypes.string,
  noMargins: PropTypes.bool,
}

MoneyField.defaultProps = {
  className: '',
  isDisabled: false,
  errorMessage: '',
  noMargins: false,
}
