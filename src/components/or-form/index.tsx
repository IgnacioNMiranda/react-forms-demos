import { FormHTMLAttributes, memo } from 'react'
import { MlFormFieldProps } from '../ml-form-field'
import { FinalForm } from './FinalForm'
import { FormikForm } from './FormikForm'
import { HookForm } from './HookForm'
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

export const OrFormMemo = ({ type, handleSubmit, controls }: OrFormProps) => {
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
        return <FinalForm controls={controls} onSubmit={handleSubmitForm} />

      case OrFormType.HOOK_FORM:
        return <HookForm controls={controls} onSubmit={handleSubmitForm} />

      default:
        return null
    }
  }

  return renderForm()
}

export const OrForm = memo(OrFormMemo)
