import React from 'react'
import classNames from 'classnames'
import { useTranslation } from 'react-i18next'

export const StatusAsText = ({ status }) => {
  const { t } = useTranslation()

  let statusText = ''
  let color = ''

  switch (status) {
    case 'PENDING':
      statusText = `${t('status.pending')}`
      color = 'bg-sky-400'
      break
    case 'APPROVED':
      statusText = `${t('status.approved')}`
      color = 'bg-green-500'
      break
    case 'REFUSED':
      statusText = `${t('status.refused')}`
      color = 'bg-red-500'
      break
    case 'AWAITING_PAYMENT':
      statusText = `${t('status.awaitingPayment')}`
      color = 'bg-yellow-500'
      break
    case 'UNDER_ANALYSIS':
      statusText = `${t('status.underAnaLysis')}`
      color = 'bg-orange-500'
      break
    case 'ACTIVE':
      statusText = `${t('status.active')}`
      color = 'bg-green-500'
      break
    case 'ACTIVE_VOUCHER':
      statusText = `${t('status.activeVoucher')}`
      color = 'bg-green-500'
      break
    default:
      statusText = status
      color = 'bg-gray-500'
      break
  }

  return <span className={classNames('text-center py-2 px-4 w-fit text-white rounded text-sm', color)}>{statusText}</span>
}
