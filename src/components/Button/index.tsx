import { PlusCircle } from 'phosphor-react'
import { ReactElement } from 'react'
import * as S from './styles'

type ButtonProps = {
  children: ReactElement
}

export function Button() {
  return (
    <S.Wrapper>
      <>
        <div>
          Criar
          <PlusCircle size={20} />
        </div>
      </>
    </S.Wrapper>
  )
}
