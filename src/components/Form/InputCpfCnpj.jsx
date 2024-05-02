import { PatternFormat } from 'react-number-format'
import PropTypes from 'prop-types'
import { InputText } from '@/components/Form/InputText'

export const InputCpfCnpj = ({ name, value, format, mask, isDisabled, onChange, ...rest }) => {
  return (
    <PatternFormat
      customInput={InputText}
      name={name}
      format={format === 'cpf' ? '###.###.###-##' : '##.###.###/####-##'}
      value={value}
      onChange={onChange}
      disabled={isDisabled}
      mask={mask}
      {...rest}
    />
  )
}

InputCpfCnpj.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  format: PropTypes.oneOf(['cpf', 'cnpj']),
  mask: PropTypes.string,
  isDisabled: PropTypes.bool,
  onChange: PropTypes.func,
}

InputCpfCnpj.defaultProps = {
  format: 'cpf',
  mask: '_',
  isDisabled: false,
  onChange: () => {},
}
