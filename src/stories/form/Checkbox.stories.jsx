import { CheckBox } from '@/components/Form/CheckBox'
import { useState } from 'react'

export default {
  title: 'Form/Checkbox',
  component: CheckBox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export const Primary = {
  render: () => {
    const [checked, setChecked] = useState(false)
    return <CheckBox checked={checked} onChange={e => setChecked(e.target.checked)} name='checkbox1' label='Aceitar Termos' />
  },
}
