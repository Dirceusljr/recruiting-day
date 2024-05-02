import React, { useState } from 'react'
import ReactFlagsSelect from 'react-flags-select'
import { useTranslation } from 'react-i18next'
import './style.scss'

const SwitchLanguage = () => {
  const { i18n } = useTranslation()

  const [selected, setSelected] = useState('BR')

  const customLabels = {
    BR: ' ',
    US: ' ',
    ES: ' ',
  }

  return (
    <div className='flex items-center justify-center'>
      <ReactFlagsSelect
        selectButtonClassName='flex items-center p-2 h-12'
        selected={selected}
        selectedSize={13}
        customLabels={customLabels}
        countries={['US', 'BR', 'ES']}
        onSelect={code => {
          const country = code
          if (country === 'US') {
            i18n.changeLanguage('en-US')
            setSelected(code)
          } else if (country === 'BR') {
            i18n.changeLanguage('pt-BR')
            setSelected(code)
          } else if (country === 'ES') {
            i18n.changeLanguage('es')
            setSelected(code)
          }
        }}
      />
    </div>
  )
}
export default SwitchLanguage
