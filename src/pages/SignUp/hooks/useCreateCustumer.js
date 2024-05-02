import { useApi } from '@/hooks'
import httpClient from '@/utils/httpClient'

export function useCreateCustumer() {
  const { data, error, loading, makeRequest } = useApi(customerData => httpClient.post('/customers', customerData))

  return {
    data,
    error,
    loading,
    createCustumer: makeRequest,
  }
}
