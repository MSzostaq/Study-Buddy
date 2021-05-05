import { useState } from "react";
import Modal from "components/organisms/Modal";

const useModal = (initialState = false) => {
  const [isOpen, setModalState] = useState(initialState);

  const handleOpenModal = () => setModalState(true);
  const handleCloseModal = () => setModalState(false);

  return { handleOpenModal, handleCloseModal, isOpen, Modal };
};

export default useModal;
