/* eslint-disable prettier/prettier */
import * as Toast from '@radix-ui/react-toast'
import { styled } from '../../styles'

export const ToastContainer = styled(Toast.Root, {
  borderRadius: '$sm',
  display: 'flex',
  flexDirection: 'coloumn',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',

  width: '360px',
  maxWidth: '360px',
  height: '82px',
  overflow: 'hidden',

  backgroundColor: '$gray700',
})

export const ToastContainerPrincipal = styled('div', {
  display: 'inline-block'
})


export const ToastTitle = styled(Toast.Title, {
  color: '$white',
  fontSize: '$lg',
  fontWeight: '$medium',
  fontFamily: '$default',
  textAlign: 'center',
})

export const ToastDescription = styled(Toast.Description, {
  color: '$gray-100',
  fontSize: '$sm',
  fontWeight: '$small',
  fontFamily: '$default',
  textAlign: 'center',
})
