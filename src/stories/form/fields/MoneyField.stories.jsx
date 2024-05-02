import { MoneyField } from '@/components/Form/Fields'
import { useState } from 'react'

export default {
  title: 'Fields/MoneyField',
  component: MoneyField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export const Primary = {
  render: () => {
    const [value, setValue] = useState('')

    return <MoneyField name='money' value={value} onChange={e => setValue(e.target.value)} placeholder='Valor' />
  },
}

export const Error = {
  render: () => {
    return <MoneyField errorMessage='inválido' placeholder='Desativado' name='money4' value='' onChange={() => null} />
  },
}

export const Disabled = {
  render: () => {
    return <MoneyField isDisabled placeholder='Desativado' name='money5' value='' onChange={() => null} />
  },
}
