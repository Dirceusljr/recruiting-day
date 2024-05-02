import { PhoneField } from '@/components/Form/Fields'
import { useState } from 'react'

export default {
  title: 'Fields/PhoneField',
  component: PhoneField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export const Primary = {
  render: () => {
    const [value, setValue] = useState('')

    return (
      <PhoneField
        label='Número de Telefone'
        name='number'
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder='(**)*****-****'
      />
    )
  },
}

export const Error = {
  render: () => {
    return (
      <PhoneField
        label='Número de Telefone'
        errorMessage='inválido'
        placeholder='(**)*****-****'
        name='number4'
        value=''
        onChange={() => null}
      />
    )
  },
}

export const Disabled = {
  render: () => {
    return (
      <PhoneField
        label='Número de Telefone'
        isDisabled
        placeholder='(**)*****-****'
        name='number5'
        value=''
        onChange={() => null}
      />
    )
  },
}
