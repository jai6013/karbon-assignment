import React, { useEffect, useRef } from "react";
import styles from "./modal.module.scss";

const Modal = ({ isModalOpen, handleModalClose, children }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    if (isModalOpen) modalRef.current?.showModal();
    else modalRef.current?.close();
  }, [isModalOpen]);

  return (
    <dialog
      draggable={false}
      ref={modalRef}
      onCancel={(e) => {
        handleModalClose(e);
      }}
      className={styles.modal}
    >
      {children}
    </dialog>
  );
};

export default Modal;