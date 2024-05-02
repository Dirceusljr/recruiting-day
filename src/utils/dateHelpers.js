/**
 * @param {Date} date
 * @param {string} locale
 * @returns {string}
 */
export const dateObjectToString = (date, locale = 'en') => {
  if (!date) return ''
  if (locale === 'en') {
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`
  }
}

/**
 * @param {string} date
 * @returns {string}
 */
export const formatBrStringDateToUs = date => {
  return date.split('/').reverse().join('-')
}
