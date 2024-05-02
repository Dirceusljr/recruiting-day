import { TextField } from '@/components/Form/Fields'
import { useState } from 'react'

export default {
  title: 'Fields/TextField',
  component: TextField,
  tags: ['autodocs'],
}

export const Primary = {
  render: () => {
    const [value, setValue] = useState('')

    return (
      <TextField
        label='Mensagem'
        name='textField'
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder='Escreva aqui'
      />
    )
  },
}

export const Error = {
  render: () => {
    return (
      <TextField
        label='Mensagem'
        errorMessage='inválido'
        placeholder='Desativado'
        name='textField4'
        value=''
        onChange={() => null}
      />
    )
  },
}

export const Disabled = {
  render: () => {
    return <TextField label='Mensagem' isDisabled placeholder='Desativado' name='textField5' value='' onChange={() => null} />
  },
}
