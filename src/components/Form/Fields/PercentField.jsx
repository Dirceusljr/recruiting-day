import classNames from 'classnames'
import { FieldMessage } from './FieldMessage'
import { Label } from '../Label'
import PropTypes from 'prop-types'
import { InputPercent } from '../InputPercent'
import { twMerge } from 'tailwind-merge'

export const PercentField = ({
  label,
  name,
  id,
  onChange,
  value,
  noMargins,
  isDisabled,
  errorMessage,
  className,
  precision,
  max,
  min,
  ...rest
}) => {
  const labelClasses = errorMessage !== '' ? 'text-negative' : ''

  return (
    <div className={twMerge(classNames({ 'mb-3': !noMargins }, className))}>
      <Label className={twMerge(classNames(labelClasses))} text={label} htmlFor={id ?? name} isInvalid={errorMessage !== ''} />
      <InputPercent
        precision={precision}
        name={name}
        id={id ?? name}
        isInvalid={errorMessage !== ''}
        isDisabled={isDisabled}
        className={className}
        onChange={onChange}
        value={value}
        max={max}
        min={min}
        {...rest}
      />
      {errorMessage && <FieldMessage message={errorMessage} />}
    </div>
  )
}

PercentField.propTypes = {
  label: PropTypes.string.isRequired,
  format: PropTypes.string,
  mask: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool,
  errorMessage: PropTypes.string,
  className: PropTypes.string,
  noMargins: PropTypes.bool,
  precision: PropTypes.number,
  max: PropTypes.number,
  min: PropTypes.number,
  allowNegative: PropTypes.bool,
}

PercentField.defaultProps = {
  isDisabled: false,
  errorMessage: '',
  noMargins: false,
  precision: 2,
  max: 100,
  min: 0,
  allowNegative: false,
}
