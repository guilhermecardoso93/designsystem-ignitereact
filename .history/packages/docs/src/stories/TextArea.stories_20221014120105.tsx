/* eslint-disable prettier/prettier */
import { StoryObj, Meta } from '@storybook/react'
import { TextArea, TextAreaProps } from '@ignite-ui/react'

export default {
  title: 'Form/Text Area',
  component: TextArea,
  args: {},
  
} as Meta<TextAreaProps>

export const Primary: StoryObj<TextAreaProps> = {}

export const Disable: StoryObj<TextAreaProps> = {
  args: {
    disabled: true
  }
}



