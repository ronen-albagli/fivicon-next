import { createPortal } from 'react-dom';

const Popup = ({ children }: any) => {
  const popupRoot = document.getElementById('popup-root')!;
  return createPortal(children, popupRoot);
};

export default Popup;
