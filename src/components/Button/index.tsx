import { Plus } from 'phosphor-react'
import { ReactElement } from 'react'
import * as S from './styles'

type ButtonProps = {
  children: ReactElement
}

export function Button() {
  return (
    <S.Wrapper>
      <>
        Criar
        <div>
          <Plus size={12} />
        </div>
      </>
    </S.Wrapper>
  )
}
