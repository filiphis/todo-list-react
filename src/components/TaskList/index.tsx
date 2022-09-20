import { ClipboardText } from 'phosphor-react'
import { Task } from '../Task'
import { TaskListProps } from './@types'
import * as S from './styles'
export function TaskList({
  tasks,
  OnDeleteTask,
  onUpdateTaskState
}: TaskListProps) {
  const tasksLength = tasks.length
  const completedTasksLength = tasks.filter((task) => task.isCompleted)
  function deleteTask(id: number) {
    OnDeleteTask(id)
  }

  function updateTaskState(id: number) {
    onUpdateTaskState(id)
  }

  return (
    <S.Wrapper>
      <header>
        <div>
          <span className="criadas">Tarefas criadas</span>
          <span className="contador">{tasks.length}</span>
        </div>
        <div>
          <span className="concluidas">Concluídas</span>
          <span className="contador">{completedTasksLength.length}</span>
        </div>
      </header>
      <div className="content">
        {tasksLength < 1 ? (
          <div className="sem-tarefa">
            <ClipboardText size={56} />
            <span>Você inda não tem tarefas cadastradas</span>
            <span>Crie tarefas e organize seus itens a fazer</span>
          </div>
        ) : (
          <div className="com-tarefas">
            {tasks
              .filter((task) => !task.isCompleted)
              .map((task) => (
                <Task
                  key={task.taskId}
                  taskId={task.taskId}
                  text={task.text}
                  isCompleted={task.isCompleted}
                  deleteTask={deleteTask}
                  updateTaskState={updateTaskState}
                />
              ))}

            {tasks
              .filter((task) => task.isCompleted)
              .map((task) => (
                <Task
                  key={task.taskId}
                  taskId={task.taskId}
                  text={task.text}
                  isCompleted={task.isCompleted}
                  deleteTask={deleteTask}
                  updateTaskState={updateTaskState}
                />
              ))}
          </div>
        )}
      </div>
    </S.Wrapper>
  )
}
