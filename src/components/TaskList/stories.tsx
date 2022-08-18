import { ComponentMeta, ComponentStory } from '@storybook/react'
import { TaskList } from '.'
import * as TaskStories from '../Task/stories'

export default {
  title: 'TaskList',
  component: TaskList,
  decorators: [(story) => <div style={{ padding: '2rem' }}>{story()}</div>]
} as ComponentMeta<typeof TaskList>

const Template: ComponentStory<typeof TaskList> = (props) => (
  <TaskList {...props} />
)

export const ComTarefas = Template.bind({})
ComTarefas.args = {
  tasks: [
    { ...TaskStories.Concluida.args, text: 'Minha primeira tarefa!', id: 1 },
    { ...TaskStories.Padrao.args, text: 'Minha primeira tarefa!', id: 2 },
    { ...TaskStories.Concluida.args, text: 'Minha primeira tarefa!', id: 3 },
    { ...TaskStories.Padrao.args, text: 'Minha primeira tarefa!', id: 4 },
    { ...TaskStories.Concluida.args, text: 'Minha primeira tarefa!', id: 5 },
    { ...TaskStories.Padrao.args, text: 'Minha primeira tarefa!', id: 6 }
  ]
}

export const Vazia = Template.bind({})
Vazia.args = {
  tasks: []
}
