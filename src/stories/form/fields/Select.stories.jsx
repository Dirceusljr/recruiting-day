import { SelectField } from '@/components/Form/Fields'
import { useState } from 'react'

const OptionsExample = [
  {
    value: '1',
    label: 'Item 1',
  },
  {
    value: '2',
    label: 'Item 2',
  },
  {
    value: '3',
    label: 'Item 3',
  },
]

export default {
  title: 'Fields/SelectField',
  component: SelectField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export const Primary = {
  render: () => {
    const [value, setValue] = useState('')

    return (
      <SelectField
        label='Lista de items'
        options={OptionsExample}
        name='list'
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    )
  },
}

export const Error = {
  render: () => {
    return (
      <SelectField
        options={OptionsExample}
        label='Lista de items'
        errorMessage='Selecione uma opção'
        name='list4'
        value=''
        onChange={() => null}
      />
    )
  },
}

export const Disabled = {
  render: () => {
    return <SelectField label='Lista de items' isDisabled name='list5' value='' onChange={() => null} />
  },
}
