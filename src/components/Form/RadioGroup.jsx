import { Label } from '@/components/Form/Label'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { FieldMessage } from '@/components/Form/Fields'
import { twMerge } from 'tailwind-merge'

export const RadioGroup = ({
  name,
  options,
  inline,
  onChange,
  value,
  className,
  isDisabled,
  errorMessage,
  labelClassName,
  radioClassName,
}) => {
  const isInvalid = errorMessage !== ''

  return (
    <div className='flex flex-col'>
      <div className={twMerge(classNames('flex', { 'flex-row gap-4': inline, 'flex-col': !inline }, radioClassName))}>
        {options.map((option, key) => {
          return (
            <Label
              isInvalid={isInvalid}
              key={key}
              htmlFor={`${name}_${key}`}
              className={twMerge(classNames('flex gap-2', labelClassName))}
            >
              <input
                type='radio'
                id={`${name}_${key}`}
                disabled={isDisabled}
                checked={option.value === value}
                value={option.value}
                onChange={onChange}
                className={twMerge(className)}
              />
              <span>{option.label}</span>
            </Label>
          )
        })}
      </div>
      {isInvalid && <FieldMessage message={errorMessage} />}
    </div>
  )
}

RadioGroup.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  inline: PropTypes.bool,
  className: PropTypes.string,
  labelClassName: PropTypes.string,
  radioClassName: PropTypes.string,
  isDisabled: PropTypes.bool,
  errorMessage: PropTypes.string,
}

RadioGroup.defaultProps = {
  options: [],
  inline: true,
  isDisabled: false,
  isInvalid: false,
  optionPrimary: ':: Selecione ::',
  errorMessage: '',
}
