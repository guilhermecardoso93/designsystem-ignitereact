/* eslint-disable prettier/prettier */
import { StoryObj, Meta } from '@storybook/react'
import { TextArea, TextAreaProps, Box, Text } from '@ignite-ui/react'

export default {
  title: 'Form/TextArea',
  component: TextArea,
  args: {},
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          <Text size="sm">Observations</Text>
          {Story()}
        </Box>
      )
    },
  ],
  
} as Meta<TextAreaProps>

export const Primary: StoryObj<TextAreaProps> = {}

export const Disable: StoryObj<TextAreaProps> = {
  args: {
    disabled: true
  }
}



