import { AtButton, MlFormField } from '..'
import { useFormik } from 'formik'
import { CustomFormProps, getInitialValues, getValidateFunction } from './common'
import { useEffect } from 'react'

export const FormikForm = ({ controls, onSubmit }: CustomFormProps) => {
  const formik = useFormik({
    initialValues: getInitialValues(controls),
    validate: getValidateFunction(controls),
    onSubmit,
  })

  useEffect(() => {
    const validate = getValidateFunction(controls)
    formik.setErrors(validate(formik.values))
  }, [])

  return (
    <form onSubmit={formik.handleSubmit} className="flex flex-col gap-y-8 w-full">
      {controls.map((control, idx) => {
        const { id, name, placeholder, type } = control

        // With Formik, both id and name have to be equal.
        return (
          <MlFormField
            key={`${id}-${name}-${idx}`}
            id={id}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values[id]}
            type={type}
            name={id}
            placeholder={placeholder}
            errorMessage={formik.errors[id]}
            visited={formik.touched[id]}
          />
        )
      })}
      <AtButton label="SUBMIT" disabled={!formik.isValid} />
    </form>
  )
}
