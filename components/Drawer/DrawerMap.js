import dynamic from "next/dynamic"

const Menu = dynamic(() => import("./Drawers/Menu"))

export const DrawerMap = (key) => {
    const drawer = {
        MENU : <Menu/>
    }
    
    return drawer[key]
}
