import { createPortal } from 'react-dom'

import { DrawerMap } from '@/components/Drawer/DrawerMap'
import ClickAwayWrapper from '../dialog/ClickAwayWrapper'


const DrawerPortal = (key, close_drawer) => {

    const DrawerContent = DrawerMap("MENU")

    return createPortal(
        <div className='drawer-background-overlay'>
            <ClickAwayWrapper onClickAway={close_drawer}>
                <div className='drawer-outer-container'>
                    <div className='drawer-content-container'>
                        {DrawerContent}
                    </div>
                </div>
            </ClickAwayWrapper>
        </div>, document.getElementById('drawer'))
}

export default DrawerPortal