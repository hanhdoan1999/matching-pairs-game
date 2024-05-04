import React from "react";
import "../styles/Modal.css"; // Import file CSS đã được chuyển đổi
import CloseIcon from "../assets/icons/close.svg";

function Modal({ children, isOpen, setIsOpen, isShowCloseButton }) {
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    isOpen && (
      <div className="modal-overlay">
        <section className="modal-main">
          {children}
          {isShowCloseButton && (
            <button className="modal-close-button" onClick={closeModal}>
              <img src={CloseIcon} alt="Close" />
            </button>
          )}
        </section>
      </div>
    )
  );
}

export default Modal;
