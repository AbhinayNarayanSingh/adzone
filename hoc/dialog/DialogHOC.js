import React, { useState } from 'react';
import Portal from './Portal';

export default function DialogHOC(Component) {
  return function DialogComponent (props) {

    const [dialogState, setDialogState] = useState({open : false, key : ""})

    const open_dialog = (key) => {
      setDialogState({open : true, key : key})
      document.body.style.overflow = "hidden"
    }
    const close_dialog = () => {
      setDialogState({open : false, key : ""})
      document.body.style.overflow = "auto"
    }

    return <>
      {dialogState.open && Portal(dialogState.key, close_dialog) }
      <Component {...props} open_dialog={open_dialog} close_dialog={close_dialog} />
    </>
  }
}