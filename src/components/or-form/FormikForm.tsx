import { AtButton, MlFormField, MlFormFieldProps } from '..'
import { useFormik } from 'formik'
import { CustomFormProps } from './common'

const getInitialValues = (controls: MlFormFieldProps[]) => {
  const initialValues: Record<string, string> = {}
  controls.forEach((control) => {
    initialValues[control.id] = ''
  })

  return initialValues
}

const getValidateFunction = (controls: MlFormFieldProps[]) => {
  const errors: Record<string, string> = {}
  return (values: Record<string, string>) => {
    Object.keys(values).forEach((key, idx) => {
      const control = controls[idx]

      if (!values[key] && control.required) {
        errors[key] = control.errorMessage || 'Required'
      } else if (control.type === 'email' && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors[key] = control.errorMessage || 'Invalid email address'
      } else if (control.maxLength && values[key].length > control.maxLength) {
        errors[key] = control.errorMessage || `Must be ${control.maxLength} characters or less`
      }
    })

    return errors
  }
}

export const FormikForm = ({ controls, onSubmit }: CustomFormProps) => {
  const formik = useFormik({
    initialValues: getInitialValues(controls),
    validate: getValidateFunction(controls),
    onSubmit,
  })

  const hasErrors = Object.values(formik.errors).length

  return (
    <form onSubmit={formik.handleSubmit} className="flex flex-col gap-y-8 max-w-full">
      {controls.map((control, idx) => {
        const { id, name, placeholder, type } = control
        return (
          <MlFormField
            key={`${id}-${name}-${idx}`}
            id={id}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values[id]}
            type={type}
            name={name}
            placeholder={placeholder}
            errorMessage={formik.errors[id]}
            visited={formik.touched[id]}
          />
        )
      })}
      <AtButton label="SUBMIT" disabled={!!hasErrors} />
    </form>
  )
}
