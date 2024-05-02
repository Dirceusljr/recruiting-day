import { RadioGroup } from '@/components/Form/RadioGroup'
import { useState } from 'react'

const OptionsExample = [
  { label: 'item 1', value: '1' },
  { label: 'item 2', value: '2' },
  { label: 'item 3', value: '3' },
]
export default {
  title: 'Form/RadioGroup',
  component: RadioGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export const Primary = {
  render: () => {
    const [value, setValue] = useState('')
    return <RadioGroup name='list' value={value} onChange={e => setValue(e.target.value)} options={OptionsExample} />
  },
}

export const Column = {
  render: () => {
    const [value, setValue] = useState('')
    return (
      <RadioGroup
        radioClassName='flex-col'
        name='list'
        value={value}
        onChange={e => setValue(e.target.value)}
        options={OptionsExample}
      />
    )
  },
}

export const Error = {
  render: () => {
    const [value, setValue] = useState('')
    return (
      <RadioGroup
        name='list'
        value={value}
        onChange={e => setValue(e.target.value)}
        options={OptionsExample}
        errorMessage='Selecione uma opção'
        isInvalid
      />
    )
  },
}
