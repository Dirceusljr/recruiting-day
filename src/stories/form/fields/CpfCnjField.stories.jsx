import { CpfCnpjField } from '@/components/Form/Fields'
import { useState } from 'react'

export default {
  title: 'Fields/CpfCnpjField',
  component: CpfCnpjField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export const Primary = {
  render: () => {
    const [value, setValue] = useState('')

    return <CpfCnpjField label='CPF' name='cpfCnpj' value={value} onChange={e => setValue(e.target.value)} placeholder='******' />
  },
}

export const Cnpj = {
  render: () => {
    const [value, setValue] = useState('')

    return (
      <CpfCnpjField
        label='cnpj'
        format='cnpj'
        name='cpfCnpj1'
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder='******'
      />
    )
  },
}

export const Error = {
  render: () => {
    return (
      <CpfCnpjField label='cpf' errorMessage='inválido' placeholder='******' name='cpfCnpj4' value='' onChange={() => null} />
    )
  },
}

export const Disabled = {
  render: () => {
    return <CpfCnpjField label='cpf' isDisabled placeholder='******' name='password5' value='' onChange={() => null} />
  },
}
