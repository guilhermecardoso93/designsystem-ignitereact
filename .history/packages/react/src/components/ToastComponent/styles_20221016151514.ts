/* eslint-disable prettier/prettier */
import * as Toast from '@radix-ui/react-toast'
import { styled } from '../../styles'

export const ToastContainer = styled(Toast.Root, {
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
})

export const ToastContainerPrincipal = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',

  cursor: 'pointer',

  '&:disabled': {
    cursor: 'not-allowed',
  },
})


export const ToastTitle = styled(Toast.Title, {
  color: '$white',
  fontSize: '$lg',
  fontWeight: '$medium',
  fontFamily: '$default',
  textAlign: 'center',
})

export const ToastClose = styled(Toast.Close, {
  all: 'unset',
  all: 'unset',
    width: '$4',
    height: '$4',
    color: '$gray200',
})

export const ToastDescription = styled(Toast.Description, {
  color: '$gray200',
  fontSize: '$sm',
  fontWeight: '$small',
  fontFamily: '$default',
  textAlign: 'center',
})