import { InputZipCode } from '@/components/Form/InputZipCode'
import { useState } from 'react'

export default {
  title: 'Form/InputZipCode',
  component: InputZipCode,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export const Primary = {
  render: () => {
    const [value, setValue] = useState('')

    return <InputZipCode name='Campo' value={value} onChange={e => setValue(e.target.value)} placeholder='CEP' />
  },
}

export const CustomMask = {
  render: () => {
    return <InputZipCode mask='*' placeholder='CEP' name='Campo2' value='' onChange={() => null} />
  },
}

export const CustomFormat = {
  render: () => {
    return <InputZipCode format='#####' placeholder='CEP EUA' name='Campo2' value='' onChange={() => null} />
  },
}

export const Invalid = {
  render: () => {
    return <InputZipCode isInvalid placeholder='Erro' name='Campo2' value='' onChange={() => null} />
  },
}

export const Disabled = {
  render: () => {
    return <InputZipCode isDisabled placeholder='Desativado' name='Campo3' value='' onChange={() => null} />
  },
}
