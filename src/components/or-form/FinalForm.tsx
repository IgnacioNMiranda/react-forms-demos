import { AtButton, MlFormField } from '..'
import { CustomFormProps, getValidateFunction } from './common'

import { Form, Field } from 'react-final-form'

export const FinalForm = ({ controls, onSubmit }: CustomFormProps) => {
  return (
    <Form
      onSubmit={onSubmit}
      validate={getValidateFunction(controls)}
      render={({ handleSubmit, valid, submitting, pristine }) => {
        return (
          <form onSubmit={handleSubmit} name="form" className="flex flex-col gap-y-8 w-full">
            {controls.map((control, idx) => {
              const { id, name, placeholder, type, required } = control

              return (
                <Field
                  name={id}
                  key={`${id}-${name}-${idx}`}
                  render={({ input, meta }) => {
                    return (
                      <MlFormField
                        {...input}
                        id={id}
                        type={type}
                        required={required}
                        placeholder={placeholder}
                        errorMessage={meta.error}
                        visited={meta.touched}
                      />
                    )
                  }}
                />
              )
            })}
            <AtButton label="SUBMIT" disabled={!valid || submitting || pristine} />
          </form>
        )
      }}
    />
  )
}
