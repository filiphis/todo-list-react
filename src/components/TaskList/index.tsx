import { ClipboardText } from 'phosphor-react'
import { Task } from '../Task'
import { TaskListProps } from './@types'
import * as S from './styles'
export function TaskList({ tasks }: TaskListProps) {
  // const [tasks, setTasks] = useState([])
  const tasksLength = tasks.length
  return (
    <S.Wrapper>
      <header>
        <div>
          <span className="criadas">Tarefas criadas</span>
          <span className="contador">{tasks.length}</span>
        </div>
        <div>
          <span className="concluidas">Concluídas</span>
          <span className="contador">0</span>
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
            {tasks.map((task) => (
              <Task key={task.key} text={task.text} state={task.state} />
            ))}
          </div>
        )}
      </div>
    </S.Wrapper>
  )
}
