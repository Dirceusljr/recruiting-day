import React from 'react'
import { NumericFormat } from 'react-number-format'
import { InputText } from '@/components/Form/InputText'
import PropTypes from 'prop-types'

export const InputPercent = ({
  value,
  precision,
  className,
  placeholder,
  allowNegative,
  name,
  isDisabled,
  onChange,
  max,
  min,
  ...rest
}) => {
  return (
    <NumericFormat
      allowNegative={allowNegative}
      thousandsGroupStyle='thousand'
      decimalScale={precision}
      onClick={e => e.target.select()}
      fixedDecimalScale={true}
      value={value}
      displayType='input'
      name={name}
      disabled={isDisabled}
      isNumericString
      onValueChange={values => onChange(values)}
      placeholder={placeholder}
      decimalSeparator=','
      thousandSeparator='.'
      className={className}
      customInput={InputText}
      suffix=' %'
      isAllowed={values => {
        const { floatValue, formattedValue } = values

        return formattedValue === '' || (floatValue <= max && floatValue >= min)
      }}
      {...rest}
    />
  )
}

InputPercent.propTypes = {
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  precision: PropTypes.number,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  allowNegative: PropTypes.bool,
  isDisabled: PropTypes.bool,
  onChange: PropTypes.func,
  max: PropTypes.number,
  min: PropTypes.number,
}

InputPercent.defaultProps = {
  max: 100,
  min: 0,
  placeholder: 'Ex.: 90,00%',
  allowNegative: false,
}
