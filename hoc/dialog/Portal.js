import { createPortal } from 'react-dom'

import { DialogMapFn } from '@/components/Dialog/DialogMap'
import ClickAwayWrapper from './ClickAwayWrapper'

const Portal = (key, close_dialog) => {

    const DialogContent = DialogMapFn(key)

    return createPortal(
        <div className='dialog-background-overlay'>
            <div className='dialog-outer-container'>
                <ClickAwayWrapper onClickAway={close_dialog}>
                    <div className='dialog-content-container'>
                        {DialogContent}
                    </div>
                </ClickAwayWrapper>
            </div>
        </div>, document.getElementById('dialog'))
}

export default Portal