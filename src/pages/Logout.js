import { useEffect } from 'react'
import { useAuth } from '@/contexts'
import { useNavigate } from 'react-router-dom'

export const Logout = () => {
  const { setToken } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    setToken(null)
    navigate('/sign-in', { replace: true })
  }, [])
}
