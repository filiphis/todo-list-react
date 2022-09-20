import { Trash } from 'phosphor-react'
import * as S from './styles'

import { TaskProps } from './@types'
import { useState } from 'react'

export function Task({
  text,
  isCompleted,
  taskId,
  deleteTask,
  updateTaskState,
  ...props
}: TaskProps) {
  // const [taskState, setTaskState] = useState(false)
  function handleDeleteTask(id: number) {
    deleteTask?.(id)
  }

  function handleTaskState(id: number) {
    // const newTaskState = !taskState
    // setTaskState(newTaskState)
    // state = newTaskState
    updateTaskState?.(id)
  }

  return (
    <S.Wrapper {...props}>
      <label
        htmlFor="checked"
        className="checkbox"
        onClick={() => handleTaskState(taskId)}
      >
        <input
          type="checkbox"
          name="input-checkbox"
          readOnly
          checked={isCompleted}
        />
        <span></span>
      </label>

      <span className={`task-text ${isCompleted ? 'TASK_CONCLUIDA' : ''}`}>
        {text}
      </span>
      <button onClick={() => handleDeleteTask(taskId)}>
        <Trash size={18} />
        <span className="sr-only">Excluir tarefa {taskId}</span>
      </button>
    </S.Wrapper>
  )
}
