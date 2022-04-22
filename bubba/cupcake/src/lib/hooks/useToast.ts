import { ToastContainer, toast, ToastContainerProps } from 'react-toastify'
import React from 'react'
const useToast = (): [
  (type: 'error' | 'info', message?: string | undefined) => React.ReactText,
  React.FC<ToastContainerProps>,
] => {
  const notify = (type: 'error' | 'info', message?: string) =>
    toast(message, {
      position: 'top-center',
      type,
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })

  return [notify, ToastContainer]
}
export default useToast
