import { AtButton, MlFormField, MlFormFieldProps } from '..'
import { CustomFormProps, getInitialValues } from './common'
import { Controller, useForm } from 'react-hook-form'

/**
 * It was necessary to build a custom validation function
 * (not using 'getValidateFunction' from common.tsx) due to React Hook Form
 * needs another errors structure.
 */
const validate = (control: MlFormFieldProps) => {
  const validations: Record<string, any> = {}

  if (control.required) {
    validations.required = control.errorMessage || 'Required'
  }

  if (control.type === 'email') {
    validations.pattern = {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
      message: control.errorMessage || 'Invalid email address',
    }
  }

  if (control.maxLength && control.type !== 'number') {
    validations.maxLength = {
      value: control.maxLength,
      message: `Cannot contain more than ${control.maxLength} characters`,
    }
  } else if (control.maxLength && control.type === 'number') {
    validations.maxLength = {
      value: control.maxLength,
      message: `Must be lower than ${control.maxLength} digits`,
    }
  }

  if (control.minLength && control.type !== 'number') {
    validations.minLength = {
      value: control.minLength,
      message: `Cannot contain less than ${control.minLength} characters`,
    }
  } else if (control.minLength && control.type === 'number') {
    validations.minLength = {
      value: control.minLength,
      message: `Must be greater than ${control.minLength} digits`,
    }
  }

  return validations
}

export const HookForm = ({ controls, onSubmit }: CustomFormProps) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Record<string, string>>({ defaultValues: getInitialValues(controls) })

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-8 w-full">
      {controls.map((fieldControl, idx) => {
        const { id, name, placeholder, required, type } = fieldControl

        return (
          <Controller
            name={id}
            control={control}
            rules={validate(fieldControl)}
            key={`${id}-${name}-${idx}`}
            render={({ field }) => {
              return (
                <MlFormField
                  id={id}
                  {...field}
                  type={type}
                  required={required}
                  placeholder={placeholder}
                  errorMessage={errors[id]?.message}
                  // visited is always true to show error messages when submitting
                  visited={true}
                />
              )
            }}
          />
        )
      })}
      <AtButton label="SUBMIT" />
    </form>
  )
}
