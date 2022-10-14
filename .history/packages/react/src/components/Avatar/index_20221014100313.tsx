/* eslint-disable prettier/prettier */
import { AvatarFallback } from '@radix-ui/react-avatar'
import { ComponentProps } from 'react'
import { User } from 'phosphor-react'
import { AvatarContainer, AvatarImage } from './styles'

export interface AvatarProps extends ComponentProps<typeof AvatarImage>{}

export function Avatar() {
  return (
    <AvatarContainer>
      <AvatarImage />
      <AvatarFallback delayMs={600}>
        <User />
      </AvatarFallback>
    </AvatarContainer>
  )
}