import { FocusEventHandler, forwardRef, InputHTMLAttributes, useState } from 'react'

export type MlFormFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  errorMessage?: string
  visited?: boolean
  id: string
}

export const MlFormField = forwardRef<HTMLInputElement, MlFormFieldProps>(
  (
    {
      id,
      type,
      name,
      placeholder,
      value,
      onChange,
      onFocus,
      onBlur,
      errorMessage,
      visited,
      required = false,
    }: MlFormFieldProps,
    ref,
  ) => {
    const hasError = !!errorMessage && visited

    const [isFocus, setIsFocus] = useState(false)
    const handleFocus: FocusEventHandler<HTMLInputElement> = (e) => {
      onFocus?.(e)
      setIsFocus(true)
    }

    const handleBlur: FocusEventHandler<HTMLInputElement> = (e) => {
      onBlur?.(e)
      setIsFocus(false)
    }

    return (
      <div className="flex flex-col gap-y-2 max-w-full">
        <div
          className={`border px-4 py-2 rounded-sm transition-colors ${hasError ? 'border-red-400' : ''} ${
            isFocus ? 'border-cyan-700' : 'border-gray-300'
          }`}
        >
          <input
            className="focus:outline-none w-full"
            id={id}
            type={type}
            ref={ref}
            name={name}
            placeholder={`${placeholder}${required ? ' (*)' : ''}`}
            onChange={onChange}
            onBlur={handleBlur}
            onFocus={handleFocus}
            value={value}
            autoComplete={type === 'password' ? 'off' : 'on'}
          />
        </div>
        {hasError && <span className="text-red-400 font-bold">{errorMessage}</span>}
      </div>
    )
  },
)
MlFormField.displayName = 'MlFormField'
