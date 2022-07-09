import { FormHTMLAttributes, FormEventHandler, FormEvent } from 'react'
import { MlFormFieldProps } from '../ml-form-field'
import { FormikForm } from './FormikForm'
import { NativeForm } from './NativeForm'

export enum OrFormType {
  NATIVE = 'native',
  FORMIK = 'formik',
  HOOK_FORM = 'hook-form',
  FINAL_FORM = 'final-form',
}

export type OrFormProps = FormHTMLAttributes<HTMLFormElement> & {
  type: OrFormType
  controls: MlFormFieldProps[]
  handleSubmit?: (values: Record<string, string>) => void
}

export const OrForm = ({ type, handleSubmit, controls }: OrFormProps) => {
  const handleSubmitForm = (values: Record<string, string>) => {
    handleSubmit?.(values)
  }

  const renderForm = () => {
    switch (type) {
      case OrFormType.NATIVE:
        return <NativeForm controls={controls} onSubmit={handleSubmitForm} />
      case OrFormType.FORMIK:
        return <FormikForm controls={controls} onSubmit={handleSubmitForm} />

      case OrFormType.FINAL_FORM:
      case OrFormType.HOOK_FORM:
      default:
        return null
    }
  }

  return renderForm()
}
