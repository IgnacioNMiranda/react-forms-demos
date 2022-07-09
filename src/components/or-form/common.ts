import { MlFormFieldProps } from '../ml-form-field'

export type CustomFormProps = {
  onSubmit: (values: Record<string, string>) => void
  controls: MlFormFieldProps[]
}
