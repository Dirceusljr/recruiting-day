import { useApi } from '@/hooks'
import httpClient from '@/utils/httpClient'

export function useIndicationCode() {
  const { data, error, loading, makeRequest } = useApi(indicatedCode =>
    httpClient.get(`/customers/indication-code/${indicatedCode ?? 'unknown'}`)
  )

  return {
    data,
    error,
    loading,
    indicatedByRequest: makeRequest,
  }
}
