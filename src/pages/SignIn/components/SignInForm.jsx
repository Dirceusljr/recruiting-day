import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/Form'
import { TextField } from '@/components/Form/Fields'

export const SignInForm = ({ loading, handleSubmit, handleChange, values = {}, errors = {}, handleModalIsOpen }) => {
  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label='Nome'
        name='username'
        placeholder='Ex.: Jõao'
        value={values.username}
        errorMessage={errors.username}
        onChange={handleChange}
        isDisabled={loading}
      />
      <TextField
        label='Senha'
        name='password'
        type='password'
        placeholder='******'
        value={values.password}
        errorMessage={errors.password}
        onChange={handleChange}
        isDisabled={loading}
      />
      <div className='flex justify-end mb-[8px] -mt-4'>
        <Button text={'Esqueci minha senha'} onClick={handleModalIsOpen} />
      </div>
      <Button text='Entrar' type='submit' isDisabled={loading} />
      <Link to='/sign-up'>
        <Button>Criar conta</Button>
      </Link>
    </form>
  )
}
