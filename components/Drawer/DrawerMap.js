import dynamic from "next/dynamic"

import Menu from "./Drawers/MenuDrawer"

export const DrawerMap = (key) => {
    const drawer = {
        MENU : <Menu/>
    }
    
    return drawer[key]
}
