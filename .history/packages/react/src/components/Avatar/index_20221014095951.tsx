import { AvatarFallback } from '@radix-ui/react-avatar';
importo { User } from 'phosphor-react'
import { AvatarContainer, AvatarImage,  } from './styles'

export function Avatar() {
  return (
    <AvatarContainer>
      <AvatarImage />
      <AvatarFallback>
        <User/>
      </AvatarFallback>
    </AvatarContainer>
  )
}