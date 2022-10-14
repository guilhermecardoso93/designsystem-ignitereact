/* eslint-disable prettier/prettier */
import { StoryObj, Meta } from '@storybook/react'
import { Button } from '@ignite-ui/react'

export default {
  title: 'Button',
  component: Button,
} as Meta

export const Primary: StoryObj = {}

export const Secondary: StoryObj = {
  args: {
    children: 'Enviar'
  }
}