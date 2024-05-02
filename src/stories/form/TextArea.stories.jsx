import { Textarea } from '@/components/Form/Textarea'
import { useState } from 'react'

export default {
  title: 'Form/Textarea',
  component: Textarea,
  tags: ['autodocs'],
}

export const Primary = {
  render: () => {
    const [value, setValue] = useState('')
    return <Textarea name='data' value={value} onChange={e => setValue(e.target.value)} placeholder='Escreva aqui' />
  },
}

export const Error = {
  render: () => {
    return <Textarea name='data' value='Falha' onChange={() => null} isInvalid placeholder='Escreva aqui' />
  },
}

export const Disabled = {
  render: () => {
    return <Textarea name='data' isDisabled placeholder='Escreva aqui' value='' onChange={() => null} />
  },
}
