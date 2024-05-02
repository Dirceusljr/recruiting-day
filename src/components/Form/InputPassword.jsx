import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { twMerge } from 'tailwind-merge'
import { InputText } from '@/components/Form/InputText'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'

export const InputPassword = ({ name, className, value, onChange, ...rest }) => {
  const [visible, setVisible] = useState(false)

  return (
    <div className='flex relative'>
      <InputText
        type={visible ? 'text' : 'password'}
        name={name}
        value={value}
        onChange={onChange}
        className={className}
        {...rest}
      />
      <button
        type='button'
        onClick={() => setVisible(!visible)}
        className={twMerge('absolute cursor-pointer right-[8px] top-[8.5px]')}
      >
        {visible ? <AiOutlineEye size={25} /> : <AiOutlineEyeInvisible size={25} />}
      </button>
    </div>
  )
}

InputPassword.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
}
