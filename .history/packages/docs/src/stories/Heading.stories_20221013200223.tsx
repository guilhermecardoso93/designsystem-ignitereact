/* eslint-disable prettier/prettier */
import { StoryObj, Meta } from '@storybook/react'
import { Heading, HeadingProps } from '@ignite-ui/react'

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    children: 'Exemplo de Texto.'
  }
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}


