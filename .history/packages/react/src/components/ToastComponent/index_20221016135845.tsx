/* eslint-disable prettier/prettier */
import { X } from 'phosphor-react';
import * as Toast from '@radix-ui/react-toast'
// import { ComponentProps, ElementType } from 'react';
import { Button } from '../Button';
import { ToastContainer, ToastTitle } from './styles'

export function ToastComponent() {
  return (
    <Toast.Provider>
      <ToastContainer>
        <ToastTitle>Agendamento Realizado!</ToastTitle>
        <Toast.Description />
        <Toast.Action asChild altText="Goto schedule to undo">
          <Button>
            <X/>
          </Button>
        </Toast.Action>
        <Toast.Close />
      </ToastContainer>

      <Toast.Viewport />
    </Toast.Provider>
  );
}

export interface ToastComponentProps {}


ToastComponent.displayName = 'Toast'