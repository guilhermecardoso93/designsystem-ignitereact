/* eslint-disable prettier/prettier */
import { Prefix, TextInputContainer } from "./styles";

export interface TextInputProps {
  prefix?: string;
}

export function TextInput({ prefix }: TextInputProps) {
  return (
    <TextInputContainer>
      {!!prefix && <Prefix>{prefix}</Prefix>}
    </TextInputContainer>
  )
}
