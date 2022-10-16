/* eslint-disable prettier/prettier */
import * as Tooltip from '@radix-ui/react-tooltip';
import { styled } from '../../styles'

export const TooltipContainer = styled(Tooltip.Root, {
  color: '$gray200',
  fontSize: '$sm',
  fontWeight: '$medium',
  fontFamily: '$default',
  textAlign: 'center',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',

  borderRadius: '$sm',
  background: '$gray700',
})

export const TooltipContent = styled(Tooltip.Root, {
  color: '$white',
  fontSize: '$lg',
  fontWeight: '$medium',
  fontFamily: '$default',
  textAlign: 'center',
})

