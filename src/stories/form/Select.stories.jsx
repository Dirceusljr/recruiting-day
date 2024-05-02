import { Select } from '@/components/Form/Select'
import { useState } from 'react'

export default {
  title: 'Form/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export const Primary = {
  render: () => {
    const [value, setValue] = useState('')
    return (
      <Select
        name='data'
        value={value}
        onChange={e => setValue(e.target.value)}
        options={[
          { value: '1', label: 'Item 1' },
          { value: '2', label: 'Item 2' },
        ]}
      />
    )
  },
}

export const Error = {
  render: () => {
    const [value, setValue] = useState('')
    return (
      <Select
        name='data'
        value={value}
        onChange={e => setValue(e.target.value)}
        options={[
          { value: '1', label: 'Item 1' },
          { value: '2', label: 'Item 2' },
        ]}
        isInvalid
      />
    )
  },
}

export const Disabled = {
  render: () => {
    return <Select name='data' isDisabled value='' onChange={() => null} />
  },
}
