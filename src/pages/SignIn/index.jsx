import { React, useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from '@/contexts'
import Swal from 'sweetalert2'
import { useTranslation } from 'react-i18next'
import { SignInForm } from './components/SignInForm'
import { ModalForgotPassword } from './components/ModalForgotPassword'
import { useForgotPasswordForm, useForgotPassword, useFormSignIn } from './hooks'
import { useLoginCustomer } from './hooks/useLoginCustomer'

export const SignIn = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const { t } = useTranslation()
  const navigate = useNavigate()
  const location = useLocation()
  const { token, setToken } = useAuth()
  const { data, error, loading, login } = useLoginCustomer()
  const {
    data: dataForgotPassword,
    error: errorForgotPassword,
    loading: loadingForgotPassword,
    forgotPassword,
  } = useForgotPassword()

  const {
    handleSubmit: forgotPasswordHandleSubmit,
    handleChange: forgotPasswordHandleChange,
    setFieldValue: forgotPasswordSetFieldValues,
    values: forgotPasswordValues,
    errors: forgotPasswordErrors,
  } = useForgotPasswordForm({
    onSubmit: values => {
      forgotPassword(values)
    },
  })

  const {
    handleSubmit: singInHandleSubmit,
    handleChange: singInHandleChange,
    setFieldValue: singInSetFieldValues,
    values: singInValues,
    errors: singInErrors,
  } = useFormSignIn({
    onSubmit: values => {
      login(values)
    },
  })

  useEffect(() => {
    if (token) navigate('/home')
  }, [token])

  useEffect(() => {
    if (!data) return
    setToken(data.token)
    const from = location.state?.from?.pathname || '/home'
    navigate(from, { replace: true })
  }, [data])

  useEffect(() => {
    if (!error) return
    Swal.fire({
      title: t('signIn.userOrPasswordInvalid'),
      text: t('signIn.tryAgain'),
      icon: 'error',
      confirmButtonText: 'Ok',
    })
  }, [error])

  const handleModalIsOpen = () => {
    setModalIsOpen(!modalIsOpen)
  }

  useEffect(() => {
    if (!dataForgotPassword) return
    Swal.fire({
      title: 'Email enviado com sucesso',
      text: 'Enviamos um email para você alterar sua senha!',
      icon: 'success',
      confirmButtonText: 'Ok',
    })
  }, [dataForgotPassword])

  useEffect(() => {
    if (!errorForgotPassword) return
    Swal.fire({
      title: 'Ocorreu um erro',
      text: 'Não foi possivel enviar um email alteração de senha, tente novamente!',
      icon: 'error',
      confirmButtonText: 'Ok',
    })
  }, [errorForgotPassword])

  return (
    <>
      <SignInForm
        loading={loading}
        handleSubmit={singInHandleSubmit}
        handleChange={singInHandleChange}
        setFieldValue={singInSetFieldValues}
        values={singInValues}
        errors={singInErrors}
        handleModalIsOpen={handleModalIsOpen}
      />
      <ModalForgotPassword
        modalIsOpen={modalIsOpen}
        handleModalIsOpen={handleModalIsOpen}
        handleSubmit={forgotPasswordHandleSubmit}
        handleChange={forgotPasswordHandleChange}
        setFieldValue={forgotPasswordSetFieldValues}
        values={forgotPasswordValues}
        errors={forgotPasswordErrors}
        loading={loadingForgotPassword}
      />
    </>
  )
}
