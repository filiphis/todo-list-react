import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    max-width: 73.6rem;
    background-color: ${theme.colors['gray-600']};

    header {
      display: flex;
      justify-content: space-between;
      align-items: center;

      div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 0.8rem;
      }

      .criadas,
      .concluidas {
        line-height: 1;
        font-size: ${theme.font.sizes.small};
        font-weight: ${theme.font.bold};
      }
      .criadas {
        color: ${theme.colors.blue};
      }
      .concluidas {
        color: ${theme.colors['purple-dark']};
      }

      .contador {
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: ${theme.font.bold};
        font-size: ${theme.font.sizes.xsmall};
        color: ${theme.colors['gray-200']};
        background-color: ${theme.colors['gray-400']};
        padding: 2px 8px;
        border-radius: 50%;
        width: 2.3rem;
      }
    }

    .content {
      margin-top: 2.4rem;
      .sem-tarefa {
        color: ${theme.colors['gray-300']};
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;
        line-height: 1.5;
        padding: 6.4rem 0;
        margin-top: 2.4rem;
        border-top: 1px solid ${theme.colors['gray-400']};
        border-radius: ${theme.border.radius};
        text-align: center;

        svg {
          margin-bottom: 1.6rem;
        }
      }

      .com-tarefas {
        display: flex;
        flex-direction: column;
        gap: 1.2rem;
      }
    }
  `}
`
