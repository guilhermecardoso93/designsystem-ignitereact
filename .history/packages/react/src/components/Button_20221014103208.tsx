/* eslint-disable prettier/prettier */

import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'

export const Button = styled('button', {
  all: 'unset'
})

export interface ButtonProps extends ComponentProps<typeof Button> {
  as?: ElementType
}


