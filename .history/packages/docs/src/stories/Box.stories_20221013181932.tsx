/* eslint-disable prettier/prettier */
import { StoryObj, Meta } from '@storybook/react'
import { Box, BoxProps } from '@ignite-ui/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {
  args: {
    children: 'Olá'
  }
}

export const Secondary: StoryObj<BoxProps> = {
  args: {
    children: 'Enviar'
  }
}