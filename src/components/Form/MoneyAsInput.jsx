import React from 'react'
import { NumericFormat } from 'react-number-format'
import classNames from 'classnames'
import { InputText } from '@/components/Form/InputText'
import PropTypes from 'prop-types'
import { twMerge } from 'tailwind-merge'

export const MoneyAsInput = ({ name, value, onChange, precision = 2, currencyCode = 'BRL', ...rest }) => {
  const { className, suffix = '', allowNegative = false, isDisabled = false } = rest

  let prefix = 'R$ '
  let decimalSeparator = ','
  let thousandSeparator = '.'

  if (['USD', 'EUR'].includes(currencyCode)) {
    decimalSeparator = '.'
    thousandSeparator = ','
  }

  if (currencyCode === 'USD') prefix = 'U$ '
  if (currencyCode === 'EUR') prefix = '€ '

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
      onValueChange={({ floatValue }, sourceInfo) => {
        onChange({ ...sourceInfo.event, numberValue: floatValue })
      }}
      customInput={InputText}
      decimalSeparator={decimalSeparator}
      thousandSeparator={thousandSeparator}
      prefix={prefix}
      suffix={suffix}
      className={twMerge(classNames(className, { 'text-negative': value < 0 }))}
      {...rest}
    />
  )
}

MoneyAsInput.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  precision: PropTypes.number,
  currencyCode: PropTypes.oneOf(['BRL', 'EUR', 'USD']),
}

MoneyAsInput.defaultProps = {
  type: 'text',
  isDisabled: false,
}
