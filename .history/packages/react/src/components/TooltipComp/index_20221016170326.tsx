/* eslint-disable prettier/prettier */
import * as Tooltip from "@radix-ui/react-tooltip";
import { TooltipContainer, TooltipContent } from "./styles";
import { Text } from "../Text";

export function TooltipComp() {
  return (
    <Tooltip.Provider>
      <TooltipContainer>
        <Tooltip.Trigger asChild></Tooltip.Trigger>
        <TooltipContent>
          <Text>22 de Outubro - Disponível</Text>
        </TooltipContent>
      </TooltipContainer>
    </Tooltip.Provider>
  );
}

export interface TooltipComponentProps {}

TooltipComp.displayName = "Tooltip";
