import { useApi } from '@/hooks'
import httpClient from '@/utils/httpClient'

export function useLoginCustomer() {
  const { data, error, loading, makeRequest } = useApi(values => httpClient.post('/auth/login/customer', values))

  return {
    data,
    error,
    loading,
    login: makeRequest,
  }
}
