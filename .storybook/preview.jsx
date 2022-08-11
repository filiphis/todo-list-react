export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

import { ThemeProvider } from 'styled-components'
import defaultTheme from '../src/styles/themes/default'
import { GlobalStyles } from '../src/styles/global'

export const decorators = [
  (Story) => (
    <ThemeProvider theme={defaultTheme} >
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  )
]
