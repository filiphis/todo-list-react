import { PlusCircle } from 'phosphor-react'
import { ButtonProps } from './@types'
import * as S from './styles'

export function Button({ ...props }: ButtonProps) {
  return (
    <S.Wrapper {...props}>
      <>
        <div>
          Criar
          <PlusCircle size={20} />
        </div>
      </>
    </S.Wrapper>
  )
}
