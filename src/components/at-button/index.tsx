import { ButtonHTMLAttributes } from 'react'

export type AtButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string
}

export const AtButton = ({ disabled, label }: AtButtonProps) => {
  return (
    <button
      type="submit"
      disabled={disabled}
      className={`${
        disabled
          ? 'bg-gray-300'
          : 'bg-slate-600 hover:bg-slate-800 active:bg-slate-100 active:text-slate-400 active:ring-slate-400 active:ring-1'
      } transition-colors px-4 py-1 text-white uppercase`}
    >
      {label}
    </button>
  )
}
