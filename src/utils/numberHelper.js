export const formatUsDecimalToFloat = (stringValue, precision = 2) => {
  return parseFloat(parseFloat(String(stringValue).replace(',', '')).toFixed(precision))
}

export const formatBrDecimalToFloat = (stringValue, precision = 2) => {
  return parseFloat(parseFloat(String(stringValue).replace(',', '.')).toFixed(precision))
}
