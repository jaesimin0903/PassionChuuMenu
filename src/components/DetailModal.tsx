// Modal.tsx
import React, { ReactNode } from "react";
import ReactDOM from "react-dom";


interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}

const DetailModal = ({ open, onClose, children }: ModalProps) => {
  if (!open) return null;

    const handleModalClick = (e : React.MouseEvent) => {
        e.stopPropagation();
    };

  return ReactDOM.createPortal(
    <>
      <div className="overLay" />
      <div className="modal ">
        <div className="flex justify-between h-1/12">
            <div className="flex text-center w-full justify-center items-center"></div>
            <button className="left-90%" onClick={()=>{onClose();}}>❌</button>
        </div>
        {children}
      </div>
    </>,
    document.getElementById("global-modal") as HTMLElement
  );
};

export default DetailModal;

// Modal.module.scss

