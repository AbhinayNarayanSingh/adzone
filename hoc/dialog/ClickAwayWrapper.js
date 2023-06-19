import React, { useState, useEffect } from 'react';

function ClickAwayWrapper(props) {
  const [wrapperRef, setWrapperRef] = useState(null);

  function handleClickOutside(event) {
    if (wrapperRef && !wrapperRef.contains(event.target)) {
      props.onClickAway();
    }
  }
  function handleEscapeKey(event) {
    if (event.keyCode === 27) {
      props.onClickAway();
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscapeKey);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  });

  return (
    <div ref={setWrapperRef} className='w-100'>
      {props.children}
    </div>
  );
}

export default ClickAwayWrapper;
