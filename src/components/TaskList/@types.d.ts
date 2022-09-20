import { TaskProps } from '../Task/@types'
export type TaskListProps = {
  tasks: TaskProps[]
  OnDeleteTask: (id: number) => void
  onUpdateTaskState: (id: number) => void
}
