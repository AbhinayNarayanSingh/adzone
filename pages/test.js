import DialogWrapper from "@/components/Dialog/DialogWrapper";
import React, { useState } from "react";

const Test = () => {
  const [portal, setPortal] = useState(false)
  return (
    <>
    <button onClick={() => setPortal(state => !state)}>Open</button>
    {portal && <DialogWrapper/>}
    
    {/* {portal && <DrawerWrapper>
      <div>drawer</div>
    </DrawerWrapper>} */}

    </>
    
  );
};

export default Test;
