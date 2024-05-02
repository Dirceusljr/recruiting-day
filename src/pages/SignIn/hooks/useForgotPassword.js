import { useApi } from '@/hooks'
import httpClient from '@/utils/httpClient'

export function useForgotPassword() {
  const { data, error, loading, makeRequest } = useApi(values => httpClient.post('/auth/forgot-password', values))

  return {
    data,
    error,
    loading,
    forgotPassword: makeRequest,
  }
}
