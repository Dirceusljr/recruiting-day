import { InputPhone } from '@/components/Form/InputPhone'
import { useState } from 'react'

export default {
  title: 'Form/InputPhone',
  component: InputPhone,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export const Primary = {
  render: () => {
    const [value, setValue] = useState('')

    return <InputPhone name='Campo' value={value} onChange={e => setValue(e.target.value)} placeholder='(**) *****-****' />
  },
}

export const CustomMask = {
  render: () => {
    return <InputPhone mask='*' placeholder='(**) *****-****' name='Campo2' value='' onChange={() => null} />
  },
}

export const Disabled = {
  render: () => {
    return <InputPhone isDisabled placeholder='Desativado' name='Campo2' value='' onChange={() => null} />
  },
}
