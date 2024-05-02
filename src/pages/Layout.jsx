import { ToastContainer } from 'react-toastify'
import React from 'react'

export const Layout = ({ children }) => {
  return (
    <div className='flex justify-center'>
      <ToastContainer />
      <main className='container'>{children}</main>
    </div>
  )
}
