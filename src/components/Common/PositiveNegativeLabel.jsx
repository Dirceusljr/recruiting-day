import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

export const PositiveNegativeLabel = ({ flag, positiveText = 'Sim', negativeText = 'Não' }) => {
  let statusText = ''
  let color = ''

  switch (flag) {
    case '1':
    case 'true':
    case 1:
    case true:
      statusText = positiveText
      color = 'bg-green-400'
      break
    case '0':
    case 'false':
    case 0:
    case false:
      statusText = negativeText
      color = 'bg-red-400'
      break
  }

  return <span className={classNames('text-center font-bold py-1 px-2 w-fit text-white rounded', color)}>{statusText}</span>
}

PositiveNegativeLabel.propTypes = {
  flag: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]).isRequired,
  positiveText: PropTypes.string,
  negativeText: PropTypes.string,
}

PositiveNegativeLabel.defaultProps = {
  positiveText: 'Sim',
  negativeText: 'Não',
}
