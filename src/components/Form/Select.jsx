import classNames from 'classnames'
import PropTypes from 'prop-types'
import { twMerge } from 'tailwind-merge'

export const Select = ({
  options,
  name,
  optionPrimary,
  id,
  value,
  prefix,
  onChange,
  className,
  isDisabled,
  isInvalid,
  ...rest
}) => {
  return (
    <select
      className={twMerge(
        classNames(
          'w-full block bg-zinc-50 py-2 px-3 border rounded-lg outline-none transition ease-in-out duration-300 delay-100 focus:border-gray-300',
          className,
          {
            'text-gray-400': value === '',
            'border border-negative text-negative': isInvalid,
          }
        )
      )}
      id={id ?? name}
      name={name}
      value={value}
      onChange={onChange}
      disabled={isDisabled}
      {...rest}
    >
      <option value='' className='text-gray-400'>
        {optionPrimary}
      </option>
      {options.map(item => (
        <option value={item.value} key={item.value}>
          {prefix && `${prefix} `}
          {item.label}
        </option>
      ))}
    </select>
  )
}

Select.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  value: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  id: PropTypes.string,
  isDisabled: PropTypes.bool,
  optionPrimary: PropTypes.string,
  noMargins: PropTypes.bool,
}

Select.defaultProps = {
  options: [],
  isDisabled: false,
  isInvalid: false,
  optionPrimary: ':: Selecione ::',
}
