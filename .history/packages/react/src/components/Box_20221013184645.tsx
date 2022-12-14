/* eslint-disable prettier/prettier */
import { styled } from '../styles'
import { ComponentProps } from "@stitches/react";

export const Box = styled('div', {
  padding: '$4',
  borderRadius:'$md',
  backgroundColor: '$gray800',
  border: '1px solid $gray600',
  width: '100%',
  color: 'white',
})

export interface BoxProps extends ComponentProps<typeof Box> {}
