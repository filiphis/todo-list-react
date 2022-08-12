import { Logo } from '.'

import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'Logomarca',
  component: Logo
} as ComponentMeta<typeof Logo>

export const Padrao: ComponentStory<typeof Logo> = () => <Logo />
