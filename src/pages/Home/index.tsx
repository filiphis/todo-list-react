import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { Logo } from '../../components/Logo'
import { Task } from '../../components/Task'
import { TaskList } from '../../components/TaskList'
import * as S from './styles'
import { TaskProps } from '../../components/Task/@types'
import { useState } from 'react'

export function Home() {
  const [tasks, setTasks] = useState<TaskProps[]>([
    { key: 5, text: 'Text1', state: 'padrao' },
    { key: 6, text: 'Text1', state: 'padrao' }
  ])

  function handleSubmitForm() {
    event?.preventDefault()
    const inputTextValue = event?.target.tasktext.value
    const taskId = new Date().getTime()
    setTasks([...tasks, { key: taskId, text: inputTextValue, state: 'padrao' }])
  }

  return (
    <>
      <S.Header>
        <Logo />
      </S.Header>
      <S.Content>
        <form className="formContainer" onSubmit={handleSubmitForm}>
          <Input placeholderText="Adicione uma nova tarefa" name="tasktext" />
          <Button />
        </form>

        <div className="tasksContainer">
          <TaskList tasks={tasks} />
        </div>
      </S.Content>
    </>
  )
}
