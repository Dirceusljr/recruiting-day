import { DateField } from '@/components/Form/Fields'
import { useState } from 'react'

export default {
  title: 'Fields/DateField',
  component: DateField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export const Primary = {
  render: () => {
    const [value, setValue] = useState('')

    return <DateField name='date' value={value} onChange={e => setValue(e.target.value)} placeholder='Data de nascimento' />
  },
}

export const MonthField = {
  render: () => {
    const [value, setValue] = useState('')

    return <DateField type='month' name='date2' value={value} onChange={e => setValue(e.target.value)} />
  },
}

export const YearField = {
  render: () => {
    const [value, setValue] = useState('')
    return (
      <DateField
        type='year'
        maxlength='4'
        placeholder='Ano'
        name='date3'
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    )
  },
}

export const Error = {
  render: () => {
    return <DateField errorMessage='inválido' placeholder='Desativado' name='date4' value='' onChange={() => null} />
  },
}

export const Disabled = {
  render: () => {
    return <DateField isDisabled placeholder='Desativado' name='date5' value='' onChange={() => null} />
  },
}
