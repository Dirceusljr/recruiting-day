import { React, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Swal from 'sweetalert2'
import { useTranslation } from 'react-i18next'
import { useCreateCustumer, useIndicationCode, useSignUpForm } from './hooks'
import { Button, CheckBox } from '@/components/Form'
import { TextField } from '@/components/Form/Fields'

export const SignUp = () => {
  const navigate = useNavigate()
  let { indicatedCode } = useParams()
  const { t } = useTranslation()

  const { data, error, loading, createCustumer } = useCreateCustumer()
  const { data: dataIndicatedBy, indicatedByRequest } = useIndicationCode()

  const { handleSubmit, handleChange, setFieldValue, values, errors, setFieldError } = useSignUpForm({
    onSubmit: async values => {
      await createCustumer(values)
    },
  })

  useEffect(() => {
    indicatedByRequest(indicatedCode)
  }, [])

  useEffect(() => {
    if (!dataIndicatedBy) return
    setFieldValue('indicatedBy', dataIndicatedBy.id)
  }, [dataIndicatedBy])

  useEffect(() => {
    if (!data) return
    Swal.fire({
      title: `${t('signUp.successMessageTitle')}`,
      text: `${t('signUp.successMessageText')}`,
      icon: 'success',
      confirmButtonText: 'Ok',
    }).then(() => navigate('/sign-in'))
  }, [data])

  useEffect(() => {
    if (!error) return
    if (error.username) setFieldError('username', 'Este login já está em uso.')
    if (error.email) setFieldError('email', 'Este e-mail já está em uso.')
    if (error[0]?.message === `The 'email' must be a valid email`) setFieldError('email', 'Este não é um email válido.')
  }, [error])

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label='Nome'
        name='name'
        placeholder='Ex.: Maria da Silva'
        value={values.name}
        errorMessage={errors.name}
        onChange={handleChange}
        isDisabled={loading}
      />
      <TextField
        label='Usuário'
        name='username'
        placeholder='Ex.: mario_silva'
        value={values.username}
        errorMessage={errors.username}
        onChange={handleChange}
        isDisabled={loading}
      />
      <TextField
        label='Email'
        name='email'
        placeholder='Ex.: mariosilva@gmail.com'
        value={values.email}
        errorMessage={errors.email}
        onChange={handleChange}
        isDisabled={loading}
      />
      <TextField
        label='Telefone'
        name='phone'
        placeholder='Ex.: (11) 99999-7777'
        value={values.phone}
        errorMessage={errors.phone}
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
      <TextField
        label='Confirmar senha'
        name='confirmPassword'
        type='password'
        placeholder='******'
        value={values.confirmPassword}
        errorMessage={errors.confirmPassword}
        onChange={handleChange}
        isDisabled={loading}
      />
      <CheckBox
        label='Eu concordo com os termos e condições de uso'
        name='check'
        value={values.check}
        onChange={e => {
          setFieldValue('check', e.target.checked)
        }}
        isDisabled={loading}
        checked={values.check}
      />
      <Button text='Cadastrar' type='submit' isDisabled={loading || !values.check} />
      <Link to='/sign-in'>
        <Button>Já Possui Conta?</Button>
      </Link>
    </form>
  )
}
