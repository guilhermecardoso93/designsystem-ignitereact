/* eslint-disable prettier/prettier */
import { StoryObj, Meta } from '@storybook/react'
import { Text, Box, TextInput, TextInputProps } from '@ignite-ui/react'

export default {
  title: 'Form/TextInput',
  component: TextInput,
  args: {},
  decorators: [
    (Story) => {
      return (
        <Box>
          <Text size='sm'>User Name</Text>
          {Story()}
        </Box>
      )
    },
  ]
} as Meta<TextInputProps>

export const Primary: StoryObj<TextInputProps> = {}

export const Disable: StoryObj<TextInputProps> = {
  args: {
    disabled: true
  }
}

export const WithPrefix: StoryObj<TextInputProps> = {
  args :{
    prefix: 'cal.com/'
  }
}



