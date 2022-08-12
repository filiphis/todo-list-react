import styled, { css } from 'styled-components'

export const Wrapper = styled.button`
  ${({ theme }) => css`
    background-color: ${theme.colors['blue-dark']};
    color: ${theme.colors['gray-100']};
    padding: 1.6rem;
    min-width: 9rem;
    height: 5.2rem;
    border-radius: ${theme.border.radius};
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    transition: filter 300ms ease, transform 150ms ease;
    transform: translateY(0);

    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.bold};

    &:hover {
      cursor: pointer;
      filter: opacity(0.8);
      transform: translateY(-0.8px);
      transition: filter 300ms ease, transform 150ms ease;
    }
  `}
`
