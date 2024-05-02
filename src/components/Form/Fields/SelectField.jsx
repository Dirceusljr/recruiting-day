import classNames from 'classnames'
import { FieldMessage } from './FieldMessage'
import { Label } from '../Label'
import PropTypes from 'prop-types'
import { Select } from '@/components/Form'
import { twMerge } from 'tailwind-merge'

export const SelectField = ({
  options = [],
  label,
  onChange,
  name,
  id,
  isDisabled,
  errorMessage,
  value,
  optionPrimary,
  className,
  prefix,
  noMargins,
}) => {
  const isInvalid = errorMessage !== ''

  return (
    <div className={twMerge(classNames({ 'mb-3': !noMargins }, className))}>
      <Label text={label} htmlFor={id ?? name} isInvalid={isInvalid} />
      <Select
        onChange={onChange}
        name={name}
        value={value}
        optionPrimary={optionPrimary}
        isDisabled={isDisabled}
        isInvalid={isInvalid}
        prefix={prefix}
        options={options}
      />
      {isInvalid && <FieldMessage message={errorMessage} />}
    </div>
  )
}

SelectField.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
  isDisabled: PropTypes.bool,
  errorMessage: PropTypes.string,
  optionPrimary: PropTypes.string,
  noMargins: PropTypes.bool,
}

SelectField.defaultProps = {
  isDisabled: false,
  options: [],
  errorMessage: '',
  optionPrimary: ':: Selecione ::',
  noMargins: false,
}
