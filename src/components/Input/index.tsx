import { ButtonProps } from './@types'

import * as S from './styles'

export function Input({ placeholderText }: ButtonProps) {
  return <S.Wrapper placeholder={placeholderText}></S.Wrapper>
}
