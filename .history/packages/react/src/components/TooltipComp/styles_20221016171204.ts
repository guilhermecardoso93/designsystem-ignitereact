/* eslint-disable prettier/prettier */
import * as Tooltip from '@radix-ui/react-tooltip';
import { violet, blackA } from '@radix-ui/colors';
import { styled } from '../../styles'

export const TooltipContainer = styled(Tooltip.Root, {
  color: '$white',
  fontSize: '$lg',
  fontWeight: '$medium',
  fontFamily: '$default',
  textAlign: 'center',
})

export const TooltipContent = styled(Tooltip.Root, {
  color: '$white',
  fontSize: '$lg',
  fontWeight: '$medium',
  fontFamily: '$default',
  textAlign: 'center',
})

