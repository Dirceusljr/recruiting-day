import * as Yup from 'yup'
import { useFormik } from 'formik'
import { useTranslation } from 'react-i18next'

export const useFormSignIn = ({ onSubmit }) => {
  const { t } = useTranslation()

  const Schema = Yup.object({
    username: Yup.string().required(t('global.validation.required')),
    password: Yup.string().required(t('global.validation.required')),
  })

  return useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit,
    validationSchema: Schema,
    validateOnBlur: false,
    validateOnChange: false,
  })
}
