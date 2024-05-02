import { ZipCodeField } from '@/components/Form/Fields'
import { useState } from 'react'

export default {
  title: 'Fields/ZipCodeField',
  component: ZipCodeField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export const Primary = {
  render: () => {
    const [value, setValue] = useState('')

    return <ZipCodeField label='CEP' name='zip' value={value} onChange={e => setValue(e.target.value)} placeholder='00000-000' />
  },
}

export const Error = {
  render: () => {
    return <ZipCodeField label='CEP' errorMessage='inválido' placeholder='00000-000' name='zip4' value='' onChange={() => null} />
  },
}

export const Disabled = {
  render: () => {
    return <ZipCodeField label='CEP' isDisabled placeholder='00000-000' name='zip5' value='' onChange={() => null} />
  },
}
