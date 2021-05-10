import React from "react";
import ReactModal from "react-modal";
import styled from "styled-components";
import Button from "components/atoms/Button";

const ModalWrapper = styled(ReactModal)`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 16px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 400px;
  max-height: 600px;
  padding: 48px;
  position: absolute;
  top: 10%;
  left: 35%;

  &;focus {
    outline: none;
  }
`;

const Modal = ({ children, handleClose, isOpen }) => {
  return (
    <ModalWrapper
      appElement={document.getElementById("root")}
      isOpen={isOpen}
      onRequestClose={handleClose}
    >
      {children}
      <Button onClick={handleClose}>Close</Button>
    </ModalWrapper>
  );
};

export default Modal;
