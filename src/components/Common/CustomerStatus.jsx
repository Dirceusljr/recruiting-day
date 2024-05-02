import React from 'react'
import classNames from 'classnames'

export const CustomerStatus = ({ isActive = false, icon = false }) => {
  const text = isActive ? 'Ativo' : 'Inativo'
  const containerClasses = classNames('flex items-center text-white gap-1 px-4 py-1 rounded-sm', {
    'bg-green-500': isActive,
    'bg-yellow-500': !isActive,
  })

  return <div className={containerClasses}>{!icon && <span className='font-semibold font-xs'>{text}</span>}</div>
}
