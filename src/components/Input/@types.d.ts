import { InputHTMLAttributes } from 'react'

export type ButtonProps = InputHTMLAttributes<HTMLInputElement> & {
  placeholderText: string
}
