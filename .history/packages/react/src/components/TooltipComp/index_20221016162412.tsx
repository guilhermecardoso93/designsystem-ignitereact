/* eslint-disable prettier/prettier */
import * as Tooltip from '@radix-ui/react-tooltip';
import { TooltipContainer } from "./styles";

export function TooltipComp() {

  return (
    <Tooltip.Provider>
    <TooltipContainer>
      <Tooltip.Trigger />
      <Tooltip.Portal>
          <Tooltip.Arrow />
          <Tooltip.Content sideOffset={5} >
          21 de Outubro - Disponível
        </Tooltip.Content>
      </Tooltip.Portal>
    </TooltipContainer>
  </Tooltip.Provider>
  )
}                                                 
