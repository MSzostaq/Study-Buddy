import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import Button from "components/atoms/Button";

const ModalWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 16px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-width: 400px;
  min-height: 400px;
  padding: 48px;
  position: absolute;
  top: 20%;
  left: 35%;
  transition: translate(-50%, -50%);
`;

const modalContainer = document.getElementById("modal-container");

const Modal = ({ children, handleClose }) => {
  const modalNode = document.createElement("div");

  useEffect(() => {
    modalContainer.appendChild(modalNode);
    return () => {
      modalContainer.removeChild(modalNode);
    };
  }, [modalNode]);

  return ReactDOM.createPortal(
    <ModalWrapper>
      {children}
      <Button onClick={handleClose}>Close modal</Button>
    </ModalWrapper>,
    modalNode
  );
};

export default Modal;
