/* eslint-disable prettier/prettier */
import * as Tooltip from '@radix-ui/react-tooltip';
import { violet, blackA } from '@radix-ui/colors';
import { styled } from '../../styles'

export const TooltipContainer = styled(Tooltip.Root, {
  
})

export const IconButton = styled('button', {
  all: 'unset',
  fontFamily: 'inherit',
  borderRadius: '100%',
  height: 35,
  width: 35,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: violet.violet11,
  backgroundColor: 'white',
  boxShadow: `0 2px 10px ${blackA.blackA7}`,
  '&:hover': { backgroundColor: violet.violet3 },
  '&:focus': { boxShadow: `0 0 0 2px black` },
})

export const TooltipContent = styled(Tooltip.Content, {
  color: '$white',
  fontSize: '$lg',
  fontWeight: '$medium',
  fontFamily: '$default',
  textAlign: 'center',
})