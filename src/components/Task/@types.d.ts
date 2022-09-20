import { LiHTMLAttributes } from 'react'

export type TaskProps = LiHTMLAttributes<HTMLLIElement> & {
  taskId: number
  isCompleted: boolean
  text: string
  deleteTask?: (taskId: number) => void
  updateTaskState?: (id: number) => void
}
