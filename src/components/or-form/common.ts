import { FormEvent } from 'react'
import { MlFormFieldProps } from '../ml-form-field'

export type CustomFormProps = {
  onSubmit: (values: Record<string, string>, e?: FormEvent<HTMLFormElement>) => void
  controls: MlFormFieldProps[]
}
