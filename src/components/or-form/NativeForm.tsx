import { MlFormField, MlFormFieldProps } from '..'
import { useFormik } from 'formik'
import { FormEvent, FormEventHandler } from 'react'
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
      } else if (values[key] === 'email' && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
      } else if (control.maxLength && values[key].length > control.maxLength) {
        errors[key] = control.errorMessage || `Must be ${control.maxLength} characters or less`
      }
    })

    return errors
  }
}

export const NativeForm = ({ controls, onSubmit }: CustomFormProps) => {
  return (
    <form className="flex flex-col gap-y-8 w-80">
      {controls.map((control, idx) => {
        const { id, name, placeholder, type } = control
        return (
          <MlFormField
            key={`${id}-${name}-${idx}`}
            id={id}
            // onChange={formik.handleChange}
            // onBlur={formik.handleBlur}
            // value={formik.values[id]}
            // type={type}
            // name={name}
            // placeholder={placeholder}
            // errorMessage={formik.errors[id]}
            // visited={formik.touched[id]}
          />
        )
      })}
      <button
        type="submit"
        className="hover:bg-blue-500 active:bg-blue-700 transition-colors px-4 py-1 bg-blue-300 text-white"
      >
        Submit
      </button>
    </form>
  )
}
