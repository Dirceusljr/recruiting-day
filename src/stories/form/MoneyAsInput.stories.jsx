import { MoneyAsInput } from '@/components/Form/MoneyAsInput'
import { useState } from 'react'

export default {
  title: 'Form/MoneyAsInput',
  component: MoneyAsInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export const Primary = {
  render: () => {
    const [value, setValue] = useState('')

    return <MoneyAsInput name='Campo' value={value} onChange={e => setValue(e.target.value)} />
  },
}

export const USD = {
  render: () => {
    return <MoneyAsInput currencyCode='USD' name='Campo' value='' onChange={() => null} />
  },
}

export const EUR = {
  render: () => {
    return <MoneyAsInput currencyCode='EUR' name='Campo' value='' onChange={() => null} />
  },
}

export const CustomPrecision = {
  render: () => {
    return <MoneyAsInput precision={5} currencyCode='EUR' name='Campo' value='' onChange={() => null} />
  },
}

export const Disabled = {
  render: () => {
    return <MoneyAsInput isDisabled name='Campo3' value='' onChange={() => null} />
  },
}
