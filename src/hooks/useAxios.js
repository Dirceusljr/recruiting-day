import { useState, useEffect } from 'react'

export const useAxios = requester => {
  const [data, setData] = useState(null)
  const [statusCode, setStatusCode] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const makeRequest = async (...args) => {
    setLoading(true)
    setError(null)

    try {
      const result = await requester(...args)
      setData(result.data)
      setStatusCode(result.status)
    } catch (err) {
      if (!err.response) throw err
      setError(err.response.data.data)
      setStatusCode(err.response.status)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    return () => {
      setData(null)
      setError(null)
      setStatusCode(null)
    }
  }, [])

  return {
    data,
    statusCode,
    error,
    loading,
    makeRequest,
  }
}
