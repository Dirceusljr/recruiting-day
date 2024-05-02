import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from '@/contexts/AuthContext'
import { AppRoutes } from './components/Common'
import 'react-toastify/dist/ReactToastify.css'
import './i18n'
import './styles.scss'
import { BalanceProvider } from './contexts'

const App = () => (
  <BrowserRouter>
    <AuthProvider>
      <BalanceProvider>
        <AppRoutes />
      </BalanceProvider>
    </AuthProvider>
  </BrowserRouter>
)

export default App
