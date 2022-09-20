import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { Logo } from '../../components/Logo'
import { TaskList } from '../../components/TaskList'
import { TaskProps } from '../../components/Task/@types'
import { ChangeEvent, FormEvent, useState } from 'react'
import * as S from './styles'
import { TaskListProps } from '../../components/TaskList/@types'

export function Home() {
  const [tasks, setTasks] = useState<TaskProps[]>([])
  const [inputTextValue, setInputTextValue] = useState('')

  function handleSubmitForm(event: FormEvent) {
    event?.preventDefault()
    const taskId = new Date().getTime()
    setTasks([
      ...tasks.filter((task) => task.isCompleted == false),
      ...tasks.filter((task) => task.isCompleted == true),
      {
        taskId,
        text: inputTextValue,
        isCompleted: false
      }
    ])
  }

  function handleChangeInputTextValue(event: ChangeEvent<HTMLInputElement>) {
    setInputTextValue(event.target.value)
  }

  function OnDeleteTask(id: number) {
    const newTasksWithoutDeleted = tasks.filter((task) => task.taskId != id)
    setTasks(newTasksWithoutDeleted)
  }

  function onUpdateTaskState(id: number) {
    const updateTask = tasks.map((task) => {
      if (task.taskId == id) {
        task.isCompleted = !task.isCompleted
      }

      return task
    })

    setTasks(updateTask)
  }

  return (
    <>
      <S.Header>
        <Logo />
      </S.Header>
      <S.Content>
        <form className="formContainer" onSubmit={handleSubmitForm}>
          <Input
            placeholderText="Adicione uma nova tarefa"
            name="tasktext"
            value={inputTextValue}
            onChange={handleChangeInputTextValue}
          />
          <Button disabled={inputTextValue === '' ? true : false} />
        </form>

        <div className="tasksContainer">
          <TaskList
            tasks={tasks}
            OnDeleteTask={OnDeleteTask}
            onUpdateTaskState={onUpdateTaskState}
          />
        </div>
      </S.Content>
    </>
  )
}
