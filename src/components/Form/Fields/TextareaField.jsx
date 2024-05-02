import classNames from 'classnames'
import { FieldMessage } from './FieldMessage'
import { Label } from '../Label'
import PropTypes from 'prop-types'
import { Textarea } from '@/components/Form/Textarea'
import { twMerge } from 'tailwind-merge'

export const TextareaField = ({ label, name, id, onChange, value, errorMessage, ...rest }) => {
  const labelClasses = errorMessage !== '' ? 'text-negative' : ''

  return (
    <div className='rounded-lg w-full'>
      <Label className={twMerge(classNames(labelClasses))} text={label} htmlFor={id ?? name} isInvalid={errorMessage !== ''} />
      <Textarea isInvalid={errorMessage !== ''} onChange={onChange} name={name} value={value} {...rest} />
      {errorMessage && <FieldMessage message={errorMessage} />}
    </div>
  )
}

TextareaField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  errorMessage: PropTypes.string,
}

TextareaField.defaultProps = {
  isDisabled: false,
  errorMessage: '',
  id: null,
}
