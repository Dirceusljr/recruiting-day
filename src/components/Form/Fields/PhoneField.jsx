import classNames from 'classnames'
import { FieldMessage } from './FieldMessage'
import { Label } from '../Label'
import PropTypes from 'prop-types'
import { InputPhone } from '..'
import { twMerge } from 'tailwind-merge'

export const PhoneField = ({
  label,
  name,
  id,
  onChange,
  value,
  noMargins,
  isDisabled,
  errorMessage,
  className,
  format,
  mask,
  ...rest
}) => {
  const labelClasses = errorMessage !== '' ? 'text-negative' : ''

  return (
    <div className={twMerge(classNames({ 'mb-3': !noMargins }, className))}>
      <Label className={twMerge(classNames(labelClasses))} text={label} htmlFor={id ?? name} isInvalid={errorMessage !== ''} />
      <InputPhone
        format={format}
        mask={mask}
        name={name}
        id={id ?? name}
        isInvalid={errorMessage !== ''}
        isDisabled={isDisabled}
        onChange={onChange}
        value={value}
        {...rest}
      />
      {errorMessage && <FieldMessage message={errorMessage} />}
    </div>
  )
}

PhoneField.propTypes = {
  label: PropTypes.string.isRequired,
  mask: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool,
  errorMessage: PropTypes.string,
  className: PropTypes.string,
  noMargins: PropTypes.bool,
}

PhoneField.defaultProps = {
  isDisabled: false,
  errorMessage: '',
  noMargins: false,
}
