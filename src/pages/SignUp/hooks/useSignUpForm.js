import * as Yup from 'yup'
import { useFormik } from 'formik'
import { useTranslation } from 'react-i18next'

export const useSignUpForm = ({ onSubmit }) => {
  const { t } = useTranslation()

  const Schema = Yup.object({
    name: Yup.string().required(t('global.validation.required')),
    email: Yup.string().email(t('signUp.validation.invalidEmail')).required(t('global.validation.required')),
    phone: Yup.string(),
    username: Yup.string()
      .matches(/^[a-z0-9_-]+$/, t('signUp.usernameTip'))
      .required(t('global.validation.required')),
    password: Yup.string().required(t('global.validation.required')),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], t('signUp.validation.validationRequiredConfirmPassword'))
      .required(t('signUp.validation.validationConfirmPassword')),
    check: Yup.boolean().oneOf([true]).required(t('global.validation.required')),
  })

  return useFormik({
    initialValues: {
      indicatedBy: '',
      name: '',
      username: '',
      phone: '',
      email: '',
      password: '',
      confirmPassword: '',
      check: false,
    },
    onSubmit,
    validationSchema: Schema,
    validateOnBlur: false,
    validateOnChange: false,
  })
}
