import React from 'react'
import PropTypes from 'prop-types'
import { twMerge } from 'tailwind-merge'
import { RoundedSpinnerIcon } from '@/components/Common'
import classNames from 'classnames'

export const Button = ({ text, type, className, isDisabled, isLoading, children, onClick, ...rest }) => {
  const buttonClasses = classNames('py-2 px-5 bg-primary text-white rounded-lg', className, {
    'transition ease-in-out duration-300 delay-50 hover:opacity-80': !isDisabled,
    'opacity-40 cursor-not-allowed': isDisabled,
    'flex gap-2 items-center': isLoading,
  })
  return (
    <button type={type} className={twMerge(buttonClasses)} onClick={onClick} disabled={isDisabled} {...rest}>
      {isLoading && <RoundedSpinnerIcon stroke='#fff' />}
      {text !== '' ? text : children}
    </button>
  )
}

Button.propTypes = {
  text: PropTypes.string,
  type: PropTypes.oneOf(['button', 'submit']),
  className: PropTypes.string,
  isDisabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  children: PropTypes.node,
  onClick: PropTypes.func,
}

Button.defaultProps = {
  text: '',
  type: 'button',
  isLoading: false,
  isDisabled: false,
  onClick: () => {},
}
