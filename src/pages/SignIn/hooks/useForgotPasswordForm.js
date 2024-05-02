import * as Yup from 'yup'
import { useFormik } from 'formik'
import { useTranslation } from 'react-i18next'

export const useForgotPasswordForm = ({ onSubmit }) => {
  const { t } = useTranslation()

  const Schema = Yup.object({
    email: Yup.string().email(t('signUp.validation.invalidEmail')).required(t('global.validation.required')),
  })

  return useFormik({
    initialValues: {
      email: '',
    },
    onSubmit,
    validationSchema: Schema,
    validateOnBlur: false,
    validateOnChange: false,
  })
}
