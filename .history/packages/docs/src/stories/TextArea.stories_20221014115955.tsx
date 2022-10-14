/* eslint-disable prettier/prettier */
import { StoryObj, Meta } from '@storybook/react'
import { TextArea, TextAreaProps, Box,} from '@ignite-ui/react'

export default {
  title: 'Form/TextArea',
  component: TextArea,
  args: {},
  
} as Meta<TextAreaProps>

export const Primary: StoryObj<TextAreaProps> = {}

export const Disable: StoryObj<TextAreaProps> = {
  args: {
    disabled: true
  }
}

export const WithPrefix: StoryObj<TextAreaProps> = {
  args :{
    prefix: 'cal.com/'
  }
}



