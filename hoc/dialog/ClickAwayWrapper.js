import React, { useState, useEffect } from 'react';

function ClickAwayWrapper(props) {
  const [wrapperRef, setWrapperRef] = useState(null);

  function handleClickOutside(event) {
    if (wrapperRef && !wrapperRef.contains(event.target)) {
      props.onClickAway();
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });

  return (
    <div ref={setWrapperRef} className='w-100'>
      {props.children}
    </div>
  );
}

export default ClickAwayWrapper;
