import { PercentField } from '@/components/Form/Fields'
import { useState } from 'react'

export default {
  title: 'Fields/PercentField',
  component: PercentField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export const Primary = {
  render: () => {
    const [value, setValue] = useState('')

    return <PercentField label='Porcentagem' name='password' value={value} onChange={e => setValue(e.target.value)} />
  },
}

export const Error = {
  render: () => {
    return <PercentField label='Porcentagem' errorMessage='inválido' name='password4' value='' onChange={() => null} />
  },
}

export const Disabled = {
  render: () => {
    return <PercentField label='Porcentagem' isDisabled name='password5' value='' onChange={() => null} />
  },
}
