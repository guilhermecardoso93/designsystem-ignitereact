/* eslint-disable prettier/prettier */
import * as Toast from '@radix-ui/react-toast'
import { styled } from '../../styles'

export const ToastContainer = styled(Toast.Root, {
  borderRadius: '$sm',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',

  width: '$26',
  maxWidth: '$26',
  height: '$82',
  overflow: 'hidden',

  backgroundColor: '$gray700',
})

export const ToastTitle = styled(Toast.Title, {
  color: '$white',
  fontSize: '$lg',
  fontWeight: '$medium',
  fontFamily: '$default',
  textAlign: 'center',
})

export const ToastDescription = styled(Toast.Description, {})
