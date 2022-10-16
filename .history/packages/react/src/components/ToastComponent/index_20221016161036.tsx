/* eslint-disable prettier/prettier */
import * as React from 'react';
import { X } from 'phosphor-react';
import * as Toast from "@radix-ui/react-toast";
import { ToastContainer, ToastTitle, ToastDescription,ToastContainerPrincipal, ToastClose } from "./styles";

export function ToastComponent() {
  const eventDateRef = React.useRef(new Date());
  const timerRef = React.useRef(0);

  function prettyDate(date : any) {
    return new Intl.DateTimeFormat('pt-BR', { dateStyle: 'full', timeStyle: 'short' }).format(date);
  }

  React.useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);


  return (
    <Toast.Provider>
      <ToastContainer>
        <ToastContainerPrincipal>
          <ToastTitle>Agendamento Realizado!</ToastTitle>
          <ToastClose>
            <X/>
        </ToastClose>
        </ToastContainerPrincipal>
        <ToastDescription asChild>
        <time dateTime={eventDateRef.current.toISOString()}>
            {prettyDate(eventDateRef.current)}
          </time>
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
