import { NumberField } from '@/components/Form/Fields'
import { useState } from 'react'

export default {
  title: 'Fields/NumberField',
  component: NumberField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export const Primary = {
  render: () => {
    const [value, setValue] = useState('')

    return (
      <NumberField
        label='código'
        name='number'
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder='Insira o código'
      />
    )
  },
}

export const Error = {
  render: () => {
    return (
      <NumberField
        label='código'
        errorMessage='inválido'
        placeholder='Desativado'
        name='number4'
        value=''
        onChange={() => null}
      />
    )
  },
}

export const Disabled = {
  render: () => {
    return <NumberField label='código' isDisabled placeholder='Desativado' name='number5' value='' onChange={() => null} />
  },
}
