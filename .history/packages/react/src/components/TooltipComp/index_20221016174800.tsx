/* eslint-disable prettier/prettier */
import * as Tooltip from "@radix-ui/react-tooltip";
import { TooltipContainer, TooltipContent } from "./styles";

export function TooltipComp() {
  return (
    <Tooltip.Provider>
      <TooltipContainer>
        <Tooltip.Trigger />
        <TooltipContent>22 de Outubro - Disponível</TooltipContent>
      </TooltipContainer>
    </Tooltip.Provider>
  );
}

export interface TooltipComponentProps {}

TooltipComp.displayName = "Tooltip";
