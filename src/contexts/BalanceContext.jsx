import React, { createContext, useState, useEffect, useContext } from 'react'
import { useApi } from '@/hooks/useApi'
import httpClient from '@/utils/httpClient'

const BalanceContext = createContext({
  balance: 0,
  loading: false,
  refreshBalance: () => {},
  clearBalance: () => {},
})

export const BalanceProvider = ({ children }) => {
  const [balance, setBalance] = useState(0)
  const { data, makeRequest, loading } = useApi(() => httpClient.get('/financial/customer-balance'))

  useEffect(() => {
    if (!data) return
    setBalance(data.balance)
  }, [data])

  const clearBalance = () => setBalance(0)
  const refreshBalance = () => {
    makeRequest()
  }

  return (
    <BalanceContext.Provider
      value={{
        balance,
        loading,
        refreshBalance,
        clearBalance,
      }}
    >
      {children}
    </BalanceContext.Provider>
  )
}

export const useBalance = () => {
  return { ...useContext(BalanceContext) }
}
