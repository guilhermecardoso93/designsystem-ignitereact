/* eslint-disable prettier/prettier */
import * as Toast from '@radix-ui/react-toast'
import { styled } from '../../styles'

export const ToastContainer = styled(Toast.Root, {
  borderRadius: '$full',
  display: 'inline-block',
  width: '$326',
  height: '$82',
  overflow: 'hidden',

  backgroundColor: '$gray700'

  
})