import { ButtonProps } from './@types'

import * as S from './styles'

export function Input({ placeholderText, ...props }: ButtonProps) {
  return <S.Wrapper placeholder={placeholderText} {...props}></S.Wrapper>
}
