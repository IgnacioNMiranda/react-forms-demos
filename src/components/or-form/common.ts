import { MlFormFieldProps } from '../ml-form-field'

export type CustomFormProps = {
  onSubmit: (values: Record<string, string>) => void
  controls: MlFormFieldProps[]
}

export const getInitialValues = (controls: MlFormFieldProps[]) =>
  controls.reduce<Record<string, string>>((prevValue, control) => {
    return {
      ...prevValue,
      [control.id]: '',
    }
  }, {})

export const getValidateFunction = (controls: MlFormFieldProps[]) => {
  const errors: Record<string, string> = {}
  return (values: Record<string, string>) => {
    Object.keys(values).forEach((key, idx) => {
      const control = controls[idx]

      if (!values[key] && control.required) {
        errors[key] = control.errorMessage || 'Required'
      } else if (control.type === 'email' && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values[key])) {
        errors[key] = control.errorMessage || 'Invalid email address'
      } else if (control.maxLength && typeof values[key] === 'string' && values[key].length > control.maxLength) {
        errors[key] = `Cannot contain more than ${control.maxLength} characters`
      } else if (
        control.maxLength &&
        typeof values[key] === 'number' &&
        String(values[key]).length > control.maxLength
      ) {
        errors[key] = `Must be lower than ${control.maxLength} digits`
      } else if (
        control.minLength &&
        typeof values[key] === 'number' &&
        String(values[key]).length < control.minLength
      ) {
        errors[key] = `Must be greater than ${control.minLength} digits`
      }
    })

    return errors
  }
}
