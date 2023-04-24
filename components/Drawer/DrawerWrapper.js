import ReactDOM from 'react-dom';

const DrawerWrapper = ({ isOpen, onClose, children }) => {
  
  return ReactDOM.createPortal( children, document.getElementById('drawer'))
};

export default DrawerWrapper;
