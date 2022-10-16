/* eslint-disable prettier/prettier */
import * as Toast from '@radix-ui/react-toast'

export function ToastComponent() {
  return (
    <Toast.Provider>
      <Toast.Root>
        <Toast.Title />
        <Toast.Description />
        <Toast.Action />
        <Toast.Close />
      </Toast.Root>

      <Toast.Viewport />
    </Toast.Provider>
  );
}

ToastComponent.displayName = 'TOast'