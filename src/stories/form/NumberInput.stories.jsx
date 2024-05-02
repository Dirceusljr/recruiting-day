import { NumberInput } from '@/components/Form/NumberInput'
import { useState } from 'react'

export default {
  title: 'Form/NumberInput',
  component: NumberInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export const Primary = {
  render: () => {
    const [value, setValue] = useState('')
    return <NumberInput name='data' value={value} onChange={e => setValue(e.target.value)} placeholder='Código' />
  },
}
export const Disabled = {
  render: () => {
    return <NumberInput name='data' isDisabled value='' onChange={() => null} placeholder='Código' />
  },
}
