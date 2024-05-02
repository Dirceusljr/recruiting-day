import { InputPassword } from '@/components/Form/InputPassword'
import { useState } from 'react'

export default {
  title: 'Form/InputPassword',
  component: InputPassword,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export const Primary = {
  render: () => {
    const [value, setValue] = useState('')

    return <InputPassword name='Senha' value={value} onChange={e => setValue(e.target.value)} placeholder='Insira sua Senha' />
  },
}

export const Disabled = {
  render: () => {
    return <InputPassword isDisabled placeholder='Desativado' name='senha2' value='' onChange={() => null} />
  },
}
