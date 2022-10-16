/* eslint-disable prettier/prettier */
import * as Tooltip from '@radix-ui/react-tooltip';
import { TooltipContainer, IconButton, TooltipContent } from "./styles";
import { PlusIcon } from '@radix-ui/react-icons';

export function TooltipComp() {

  return (
    <Tooltip.Provider>
    <TooltipContainer>
    <Tooltip.Trigger asChild>
          <IconButton>
            <PlusIcon />
          </IconButton>
        </Tooltip.Trigger>
        <TooltipContent>
          Add to library
        </TooltipContent>
    </TooltipContainer>
  </Tooltip.Provider>
  )
}                                                 


export interface TooltipComponentProps {}

TooltipComp.displayName = "Tooltip";