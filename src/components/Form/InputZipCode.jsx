import { PatternFormat } from 'react-number-format'
import PropTypes from 'prop-types'
import { InputText } from '@/components/Form/InputText'

export const InputZipCode = ({ name, value, format, mask, isDisabled, onChange, ...rest }) => {
  return (
    <PatternFormat
      customInput={InputText}
      name={name}
      format={format}
      value={value}
      onChange={onChange}
      disabled={isDisabled}
      mask={mask}
      {...rest}
    />
  )
}

InputZipCode.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  format: PropTypes.string,
  mask: PropTypes.string,
  isDisabled: PropTypes.bool,
  onChange: PropTypes.func,
}

InputZipCode.defaultProps = {
  format: '#####-###',
  mask: '_',
  isDisabled: false,
  onChange: () => {},
}
