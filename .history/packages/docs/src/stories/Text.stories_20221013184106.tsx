/* eslint-disable prettier/prettier */
import { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@ignite-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children: (
      <>
        <span>Elemento Box</span>
      </>
    )
  }
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}
