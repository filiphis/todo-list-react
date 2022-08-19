import styled, { css } from 'styled-components'

export const Wrapper = styled.input`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    align-items: center;
    padding: ${theme.spacings.small};
    background-color: ${theme.colors['gray-500']};
    color: ${theme.colors['gray-300']};
    border: none;
    border-radius: ${theme.border.radius};
  `}
`
