import { FocusEventHandler, InputHTMLAttributes, useState } from 'react'

export type MlFormFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  errorMessage?: string
  visited?: boolean
  id: string
}

export const MlFormField = ({
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
}: MlFormFieldProps) => {
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
    <div className="flex flex-col gap-y-2">
      <div
        className={`border px-4 py-2 rounded-sm transition-colors ${hasError ? 'border-red-400' : ''} ${
          isFocus ? 'border-cyan-700' : 'border-gray-300'
        }`}
      >
        <input
          className="focus:outline-none w-full"
          id={id}
          type={type}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          onBlur={handleBlur}
          onFocus={handleFocus}
          value={value}
        />
      </div>
      {hasError && <span className="text-red-400 font-bold">{errorMessage}</span>}
    </div>
  )
}
