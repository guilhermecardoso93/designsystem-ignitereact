/* eslint-disable prettier/prettier */
import { StoryObj, Meta } from '@storybook/react'
import { Button, ButtonProps } from '@ignite-ui/react'

export default {
  title: 'Button',
  component: Button,
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {
  args: {
    children: 'Olá'
  }
}

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    children: 'Enviar'
  }
}