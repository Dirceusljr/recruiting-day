import { PasswordField } from '@/components/Form/Fields'
import { useState } from 'react'

export default {
  title: 'Fields/PasswordField',
  component: PasswordField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export const Primary = {
  render: () => {
    const [value, setValue] = useState('')

    return (
      <PasswordField label='Senha' name='password' value={value} onChange={e => setValue(e.target.value)} placeholder='******' />
    )
  },
}

export const Error = {
  render: () => {
    return (
      <PasswordField label='Senha' errorMessage='inválido' placeholder='******' name='password4' value='' onChange={() => null} />
    )
  },
}

export const Disabled = {
  render: () => {
    return <PasswordField label='Senha' isDisabled placeholder='******' name='password5' value='' onChange={() => null} />
  },
}
