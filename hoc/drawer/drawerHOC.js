import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import DrawerPortal from './DrawerPortal';

export default function DrawerHOC(Component) {
  return function DrawerComponent (props) {
    const router = useRouter()
    const [dialogState, setDialogState] = useState({open : false, key : ""})

    const open_drawer = (key) => {
      setDialogState({open : true, key : key})
      document.body.style.overflow = "hidden"
    }
    const close_drawer = () => {
      setDialogState({open : false, key : ""})
      document.body.style.overflow = "auto"
    }

    useEffect(() => {
      close_drawer()
    }, [router.query])

    return <>
      {dialogState.open && DrawerPortal(dialogState.key, close_drawer) }
      <Component {...props} open_drawer={open_drawer} close_drawer={close_drawer} />
    </>
  }
}
