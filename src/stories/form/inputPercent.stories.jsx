import { InputPercent } from '@/components/Form/InputPercent'
import { useState } from 'react'

export default {
  title: 'Form/InputPercent',
  component: InputPercent,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export const Primary = {
  render: () => {
    const [value, setValue] = useState('')
    return <InputPercent name='data' value={value} onChange={value => setValue(value)} />
  },
}
export const Disabled = {
  render: () => {
    return <InputPercent name='data' isDisabled placeholder='Código' value='' />
  },
}
