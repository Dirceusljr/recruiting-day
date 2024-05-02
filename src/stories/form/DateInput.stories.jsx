import { DateInput } from '@/components/Form/DateInput'
import { useState } from 'react'

export default {
  title: 'Form/DateInput',
  component: DateInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export const Primary = {
  render: () => {
    const [value, setValue] = useState()
    return <DateInput name='data' value={value} onChange={e => setValue(e.target.value)} />
  },
}
export const Disabled = {
  render: () => {
    return <DateInput name='data' isDisabled />
  },
}
