/* eslint-disable prettier/prettier */
import * as Tooltip from '@radix-ui/react-tooltip';
import { styled } from '../../styles'

export const TooltipContainer = styled(Tooltip.Root, {
  borderRadius: '$sm',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$1',

  width: '360px',
  maxWidth: '360px',
  height: '82px',
  overflow: 'hidden',
  backgroundColor: '$gray700',
  border: '2px solid $gray200',
})
