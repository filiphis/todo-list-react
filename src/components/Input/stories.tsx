import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Input } from '.'

export default {
  title: 'Input',
  component: Input
} as ComponentMeta<typeof Input>

export const Padrao: ComponentStory<typeof Input> = (args) => (
  <Input {...args} />
)

Padrao.args = {
  placeholderText: 'Adicione uma nova tarefa'
}
