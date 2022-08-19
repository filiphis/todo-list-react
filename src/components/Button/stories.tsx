import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Button } from './index'

export default {
  title: 'Botão',
  component: Button
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = () => <Button />

export const Padrao = Template.bind({})

// Padrao.args = {
//   children: 'Criar'
// }
