import { TextareaField } from '@/components/Form/Fields'
import { useState } from 'react'

export default {
  title: 'Fields/TextareaField',
  component: TextareaField,
  tags: ['autodocs'],
}

export const Primary = {
  render: () => {
    const [value, setValue] = useState('')

    return (
      <TextareaField
        label='Descrição'
        name='textarea'
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder='Escreva sua descrição'
      />
    )
  },
}

export const Error = {
  render: () => {
    return (
      <TextareaField
        label='Descrição'
        errorMessage='inválido'
        placeholder='Desativado'
        name='textarea4'
        value=''
        onChange={() => null}
      />
    )
  },
}

export const Disabled = {
  render: () => {
    return <TextareaField label='Descrição' isDisabled placeholder='Desativado' name='textarea5' value='' onChange={() => null} />
  },
}
