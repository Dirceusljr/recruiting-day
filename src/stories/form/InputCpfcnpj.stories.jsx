import { InputCpfCnpj } from '@/components/Form/InputCpfCnpj'
import { useState } from 'react'

export default {
  title: 'Form/InputCpfCnpj',
  component: InputCpfCnpj,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export const Cnpj = {
  render: () => {
    const [value, setValue] = useState('')

    return (
      <InputCpfCnpj
        name='input1'
        format='cnpj'
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder='Insira seu Cpnj'
      />
    )
  },
}

export const Cpf = {
  render: () => {
    const [value, setValue] = useState('')

    return (
      <InputCpfCnpj
        name='input2'
        format='cpf'
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder='Insira seu Cpf'
      />
    )
  },
}

export const Disabled = {
  render: () => {
    return <InputCpfCnpj name='input3' format='cpf' isDisabled placeholder='Desativado' value='' />
  },
}
