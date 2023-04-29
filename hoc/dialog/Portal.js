import { createPortal } from 'react-dom'

import { DialogMapFn } from '@/components/Dialog/DialogMap'
import ClickAwayWrapper from './ClickAwayWrapper'

const Portal = (key, close_dialog) => {

    const DialogContent = DialogMapFn("SUCCESS_DIALOG")

    return createPortal(
        <div className='dialog-background-overlay'>
            <ClickAwayWrapper onClickAway={close_dialog}>
                <div className='dialog-outer-container'>
                    <div className='dialog-content-container'>
                        {DialogContent}
                    </div>
                </div>
            </ClickAwayWrapper>
        </div>, document.getElementById('dialog'))
}

export default Portal