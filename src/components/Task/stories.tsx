import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Task } from '.'

export default {
  title: 'Tarefa',
  component: Task
} as ComponentMeta<typeof Task>

const Template: ComponentStory<typeof Task> = (args) => <Task {...args} />

export const Padrao = Template.bind({})
Padrao.args = {
  id: 1,
  state: 'padrao',
  text: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.'
}

export const Concluida = Template.bind({})
Concluida.args = {
  state: 'concluida',
  text: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.'
}
