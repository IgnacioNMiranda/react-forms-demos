import { AtButton, MlFormField } from '..'
import { ChangeEventHandler, FocusEventHandler, FormEventHandler, useEffect, useState } from 'react'
import { CustomFormProps, getInitialValues, getValidateFunction } from './common'

export const NativeForm = ({ controls, onSubmit }: CustomFormProps) => {
  const [errors, setErrors] = useState<Record<string, string | undefined>>({})
  const [touched, setTouched] = useState<Record<string, boolean>>({})
  const [values, setValues] = useState<Record<string, string>>(() => getInitialValues(controls))

  const validate = () => {
    const validateFunction = getValidateFunction(controls)
    const errors = validateFunction(values)
    setErrors(errors)
  }

  useEffect(() => {
    validate()
  }, [])

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const control = controls.find((c) => c.id === e.target.id)
    if (control) {
      validate()
      setValues({
        ...values,
        [e.target.id]: e.target.value,
      })
    }
  }

  const handleBlur: FocusEventHandler<HTMLInputElement> = (e) => {
    const control = controls.find((c) => c.id === e.target.id)
    if (control) {
      validate()
      setTouched({
        ...touched,
        [e.target.id]: true,
      })
    }
  }

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement)
    const values = Object.fromEntries(formData)

    // Considering no file uploads.
    const normValues = values as Record<string, string>

    onSubmit(normValues)
  }

  const hasErrors = Object.values(errors).length

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-y-8 max-w-full">
      {controls.map((control, idx) => {
        const { id, name, placeholder, type, required } = control
        return (
          <MlFormField
            key={`${id}-${name}-${idx}`}
            id={id}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values[id]}
            type={type}
            name={name}
            required={required}
            placeholder={placeholder}
            errorMessage={errors[id]}
            visited={touched[id]}
          />
        )
      })}
      <AtButton label="SUBMIT" disabled={!!hasErrors} />
    </form>
  )
}
