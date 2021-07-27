import React from "react";
import ReactModal from "react-modal";
import PropTypes from "prop-types";
import styled from "styled-components";
import Button from "components/atoms/Button";

const ModalWrapper = styled(ReactModal)`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 16px;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  opacity: 1;
  padding: 48px;
  position: absolute;
  top: 10%;
  left: 35%;
  min-width: 400px;
  max-height: 600px;

  &:focus {
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

Modal.propTypes = {
  children: PropTypes.element,
  handleClose: PropTypes.func,
  isOpen: PropTypes.bool,
};

export default Modal;
