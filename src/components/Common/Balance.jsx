import { useTranslation } from 'react-i18next'
import MoneyAsText from '@/components/Common/MoneyAsText'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { useEffect, useState } from 'react'
import { useBalance } from '@/contexts'

export const Balance = () => {
  const { t } = useTranslation()
  const [check, setCheck] = useState(false)
  const { refreshBalance, balance } = useBalance()

  useEffect(() => {
    refreshBalance()
  }, [])

  return (
    <div className='p-4 grid grid-cols-2 items-center justify-between'>
      <div>
        <h2 className='text-xs'>{t('dashboard.yourBalance')}</h2>
        <div className='flex items-center pt-1 gap-2 text-xl lg:text-2xl'>
          {check ? (
            <div className='blur-sm rounded'>{balance}</div>
          ) : (
            <MoneyAsText className='font-bold text-primary text-2xl' value={balance} prefix='R$ ' />
          )}
        </div>
      </div>
      <div className='flex justify-end' onClick={() => setCheck(!check)}>
        {check ? <AiOutlineEyeInvisible className='text-xl' /> : <AiOutlineEye className='text-xl' />}
      </div>
    </div>
  )
}
