import { Plus } from 'phosphor-react'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { Logo } from '../../components/Logo'
import { Task } from '../../components/Task'
import { TaskList } from '../../components/TaskList'
import * as S from './styles'
import { TaskProps } from '../../components/Task/@types'

const tasks: TaskProps[] = [
  // <Task key={1} text="text1" state="padrao" />,
  // <Task key={1} text="text1" state="padrao" />,
  // <Task key={1} text="text1" state="padrao" />,
  // <Task key={1} text="text1" state="padrao" />,
  // <Task key={1} text="text1" state="padrao" />,
  // <Task key={1} text="text1" state="padrao" />
  { key: 1, text: 'Text1', state: 'padrao' },
  { key: 2, text: 'Text1', state: 'padrao' },
  { key: 3, text: 'Text1', state: 'padrao' },
  { key: 4, text: 'Text1', state: 'padrao' },
  { key: 5, text: 'Text1', state: 'padrao' },
  { key: 6, text: 'Text1', state: 'padrao' }
]

export function Home() {
  return (
    <>
      <S.Header>
        <Logo />
      </S.Header>
      <S.Content>
        <div className="formContainer">
          <Input placeholderText="Adicione uma nova tarefa" />
          <Button />
        </div>

        <div className="tasksContainer">
          <TaskList tasks={tasks} />
        </div>
      </S.Content>
    </>
  )
}
