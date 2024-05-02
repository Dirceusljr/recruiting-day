import { Toggle } from '@/components/Form/Toggle'
import { useState } from 'react'

export default {
  title: 'Form/Toggle',
  component: Toggle,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export const Primary = {
  render: () => {
    const [value, setValue] = useState(false)
    return <Toggle name='data' isToggled={value} onChange={() => setValue(!value)} />
  },
}
