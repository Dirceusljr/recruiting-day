import { InputText } from '@/components/Form/InputText'
import { useState } from 'react'

export default {
  title: 'Form/InputText',
  component: InputText,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export const Primary = {
  render: () => {
    const [value, setValue] = useState('')

    return <InputText name='Campo' value={value} onChange={e => setValue(e.target.value)} placeholder='Descrição' />
  },
}

export const Invalid = {
  render: () => {
    const [value, setValue] = useState('')

    return <InputText name='Campo' value={value} onChange={e => setValue(e.target.value)} placeholder='Erro' isInvalid />
  },
}

export const Disabled = {
  render: () => {
    return <InputText isDisabled placeholder='Desativado' name='Campo2' value='' onChange={() => null} />
  },
}
