import { Check } from 'phosphor-react'
import styled, { css } from 'styled-components'

export const Wrapper = styled.li`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    max-width: 73.6rem;
    padding: 1.6rem;
    border-radius: ${theme.border.radius};
    background-color: ${theme.colors['gray-500']};
    /* border: 1px solid ${theme.colors['gray-400']}; */
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);

    span {
      max-width: 63.2rem;
      font-size: ${theme.font.sizes.small};
      color: ${theme.colors['gray-100']};
      line-height: 140%;
      flex-grow: 1;
    }

    button {
      color: ${theme.colors['gray-300']};
      background-color: transparent;
      border: none;
      line-height: 0;
      cursor: pointer;
    }

    /* Label */
    .checkbox {
      position: relative;
      width: 1.8rem;
      height: 1.8rem;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }

    /* input checkbox */
    .checkbox input[type='checkbox'] {
      visibility: hidden;
    }

    /* Span */
    .checkbox input[type='checkbox'] + span {
      position: absolute;
      width: 1.8rem;
      height: 1.8rem;
      background-color: ${theme.colors['gray-400']};
      box-shadow: 0 0 0 2px inset ${theme.colors.blue};
      border-radius: 50%;
      transition: background-color 200ms linear, box-shadow 300ms linear;
    }

    .checkbox input[type='checkbox']:checked + span {
      box-shadow: none;
      background-color: ${theme.colors['purple-dark']};
      background-image: url('/check.svg');
      background-repeat: no-repeat;
      background-size: contain;
      background-position: center 65%;
      background-size: 75%;
      transition: background-color 100ms linear, box-shadow 300ms linear;
    }

    .task-text {
      margin-left: 1.4rem;
    }

    .TASK_CONCLUIDA {
      text-decoration: line-through;
      color: ${theme.colors['gray-300']};
    }

    .sr-only {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
      border-width: 0;
    }
  `}

  transition: transform 100ms linear, opacity 100ms linear;
  &:hover {
    opacity: 0.6;
  }
`
