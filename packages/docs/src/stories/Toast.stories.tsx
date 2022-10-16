/* eslint-disable prettier/prettier */
import { StoryObj, Meta } from "@storybook/react";
import { ToastComponent, ToastComponentProps } from "@ignite-ui/react";

export default {
  title: "Form/Toast",
  component: ToastComponent,
  args: {
    children:"Agendamento Confirmado",
    variant: 'primary'
  },
} as Meta<ToastComponentProps>;

export const Primary: StoryObj<ToastComponentProps> = {};