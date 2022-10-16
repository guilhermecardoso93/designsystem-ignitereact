/* eslint-disable prettier/prettier */
import { X } from 'phosphor-react';
// import { ComponentProps, ElementType } from 'react';
// import { Button } from '../Button';
import * as Toast from "@radix-ui/react-toast";
import { ToastContainer, ToastTitle, ToastDescription,ToastContainerPrincipal, ToastClose } from "./styles";

export function ToastComponent() {
  return (
    <Toast.Provider>
      <ToastContainer>
        <ToastContainerPrincipal>
          <ToastTitle>Agendamento Realizado!</ToastTitle>
          <ToastClose>
            <X/>
        </ToastClose>
        </ToastContainerPrincipal>
        <ToastDescription>
          12 de Outubro de 2022 17:50
        </ToastDescription>
      </ToastContainer>

      <Toast.Viewport />
    </Toast.Provider>
  );
}                                                 

export interface ToastComponentProps {}

ToastComponent.displayName = "Toast";

/*
 <Toast.Action asChild altText="Goto schedule to undo">
          <Button>
            <X/>
          </Button>
        </Toast.Action>
        <Toast.Close /> */
