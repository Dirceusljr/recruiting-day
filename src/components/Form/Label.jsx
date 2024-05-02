import classNames from 'classnames'
import PropTypes from 'prop-types'
import { twMerge } from 'tailwind-merge'

export const Label = ({ text, className, children, htmlFor, isInvalid, ...rest }) => {
  return (
    <label
      className={twMerge(classNames('mb-1 block', className, { 'text-negative font-bold': isInvalid }))}
      htmlFor={htmlFor}
      {...rest}
    >
      {children ?? text}
    </label>
  )
}

Label.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
  htmlFor: PropTypes.string,
  isInvalid: PropTypes.bool,
  children: PropTypes.node,
}

Label.defaultProps = {
  text: '',
  isInvalid: false,
}
