import * as S from './styles'

type ButtonProps = {
  children: string
}

export function Button({ children }: ButtonProps) {
  return <S.Wrapper>{children}</S.Wrapper>
}
