import styled, { css } from 'styled-components'

export const Wrapper = styled.div``

export const Header = styled.header`
  width: 100vw;
  height: 20rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors['gray-700']};
`

export const Content = styled.main`
  background-color: transparent;
  max-width: 73.6rem;
  margin: 0 auto;
  padding: 0 2rem;
  .formContainer {
    background-color: transparent;
    display: flex;
    align-items: center;
    gap: 0.8rem;
    margin-top: -26px;
  }

  .tasksContainer {
    margin-top: 6.4rem;
  }
`
