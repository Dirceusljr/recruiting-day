import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { DateInput, Label } from '@/components/Form'
import { FieldMessage } from '@/components/Form/Fields/FieldMessage'

export const DateField = ({ name, onChange, type, label, noMargins, value, isDisabled, errorMessage, ...rest }) => {
  const { className, id } = rest
  const labelClasses = errorMessage !== '' ? 'text-negative' : ''

  return (
    <div className={classNames({ 'mb-3': !noMargins }, className)}>
      <div className='flex justify-between items-center'>
        <Label className={labelClasses} text={label} htmlFor={id ?? name} isInvalid={errorMessage !== ''} />
        <p tabIndex='-1' className=' text-gray-400 text-xs'>
          Formato: {type === 'date' && 'dd/mm/aaaa'}
          {type === 'month' && 'mm'}
          {type === 'year' && 'yyyy'}
        </p>
      </div>
      <DateInput
        name={name}
        type={type}
        disabled={isDisabled}
        value={value}
        isInvalid={errorMessage !== ''}
        onChange={onChange}
        placeholder='dd/mm/aaaa'
        {...rest}
      />
      {errorMessage && <FieldMessage message={errorMessage} />}
    </div>
  )
}

DateField.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string,
  className: PropTypes.string,
  isDisabled: PropTypes.bool,
  errorMessage: PropTypes.string,
  noMargins: PropTypes.bool,
  type: PropTypes.oneOf(['date', 'month', 'year']),
}

DateField.defaultProps = {
  className: '',
  isDisabled: false,
  errorMessage: '',
  noMargins: false,
  type: 'date',
}
