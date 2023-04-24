import { useState } from 'react';
import ReactDOM from 'react-dom';

import { DialogMapFn } from './DialogMap';

const DialogWrapper = ({ key }) => {

  const [dialogState, setDialogState] = useState({
    open: false,
    type: "",
    dialogData: {},
    dialogModel: {}
  })

  const DialogContent = DialogMapFn("SUCCESS_DIALOG")

  return ReactDOM.createPortal(
    <div>
      {DialogContent}
    </div>, document.getElementById('dialog'))
};

export default DialogWrapper;
