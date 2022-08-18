import { Trash } from 'phosphor-react'
import * as S from './styles'

import { TaskProps } from './@types'

export function Task({ text, state = 'padrao', key }: TaskProps) {
  return (
    <S.Wrapper>
      <label htmlFor="checked" className="checkbox">
        <input
          type="checkbox"
          name="input-checkbox"
          id="checked"
          checked={state === 'concluida'}
        />
        <span></span>
      </label>

      <span
        className={`task-text ${state === 'concluida' ? 'TASK_CONCLUIDA' : ''}`}
      >
        {text}
      </span>
      <a href="">
        <Trash size={18} />
        <span className="sr-only">Excluir tarefa {key}</span>
      </a>
    </S.Wrapper>
  )
}
