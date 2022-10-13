import { styled } from './styles'

export type ButtonTypes = {
  size: 'small' | 'big'
}

export const Button = styled('button', {
  fontFamily: '$default',
  backgroundColor: '$ignite500',
  borderColor: '$md',
  padding: '$4',
})
