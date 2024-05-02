import { InputText } from '@/components/Form/InputText'
import PropTypes from 'prop-types'

export const DateInput = ({ name, type, value, onChange, ...rest }) => {
  return <InputText pattern='[0-9]{2}/[0-9]{2}/[0-9]{4}' name={name} type={type} value={value} onChange={onChange} {...rest} />
}

DateInput.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
  isDisabled: PropTypes.bool,
}

DateInput.defaultProps = {
  type: 'date',
  isDisabled: false,
  value: '',
  onChange: () => {},
}
