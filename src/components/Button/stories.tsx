import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Button } from './index'

export default {
  title: 'Botões/Botão',
  component: Button
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Padrao = Template.bind({})

Padrao.args = {
  children: 'Criar'
}
