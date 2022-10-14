/* eslint-disable prettier/prettier */
import { ComponentProps } from 'react'
import { User } from 'phosphor-react'
import { AvatarContainer, AvatarImage, AvatarFallback } from './styles'

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