import DialogHOC from '@/hoc/dialog/DialogHOC'
import React, { useState } from 'react'

const Test = (props) => {

  return (
    <div>
      <button onClick={() => {
        props.open_dialog("SUCCESS_DIALOG")}}>Open</button>
      
      Test</div>
  )
}

export default DialogHOC(Test)