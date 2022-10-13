/* eslint-disable prettier/prettier */
import { styled } from '@stitches/react'
import { ComponentProps } from 'react'

export const Box = styled('div', {})

export interface BoxProps extends ComponentProps<typeof Box> {}
