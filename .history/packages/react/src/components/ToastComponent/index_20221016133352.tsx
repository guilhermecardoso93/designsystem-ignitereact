/* eslint-disable prettier/prettier */
import * as Toast from '@radix-ui/react-toast'
import { X } from 'phosphor-react';
// import { ComponentProps, ElementType } from 'react';
import { Button } from '../Button';

export function ToastComponent() {
  return (
    <Toast.Provider>
      <Toast.Root>
        <Toast.Title />
        <Toast.Description />
        <Toast.Action asChild altText="Goto schedule to undo">
          <Button>
            <X/>
          </Button>
        </Toast.Action>
        <Toast.Close />
      </Toast.Root>

      <Toast.Viewport />
    </Toast.Provider>
  );
}

export interface ToastComponentProps {}


ToastComponent.displayName = 'Toast'