/* eslint-disable prettier/prettier */
import { StoryObj, Meta } from "@storybook/react";
import { TooltipComp, TooltipComponentProps } from "@ignite-ui/react";

export default {
  title: "Form/Tooltip",
  component: TooltipComp,
  args: {
    children:"Agendamento Confirmado",
    variant: 'primary'
  },
} as Meta<TooltipComponentProps>;

export const Primary: StoryObj<TooltipComponentProps> = {};
