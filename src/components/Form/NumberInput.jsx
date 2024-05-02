import React from 'react'
import { NumericFormat } from 'react-number-format'
import { InputText } from '@/components/Form/InputText'
import PropTypes from 'prop-types'

export const NumberInput = ({ name, value, onChange, ...rest }) => {
  const { allowNegative = false, isDisabled = false } = rest

  return (
    <NumericFormat
      allowNegative={allowNegative}
      decimalScale={0}
      onClick={e => e.target.select()}
      value={value}
      displayType='input'
      name={name}
      disabled={isDisabled}
      onValueChange={(values, sourceInfo) => {
        onChange({ ...sourceInfo.event, numberValue: values.floatValue })
      }}
      type='number'
      customInput={InputText}
      {...rest}
    />
  )
}

NumberInput.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
  className: PropTypes.string,
  isDisabled: PropTypes.bool,
  isInvalid: PropTypes.bool,
}

NumberInput.defaultProps = {
  type: 'text',
  isDisabled: false,
  isInvalid: false,
}
