import React from "react";
import styled from "styled-components";
import { ReactComponent as DeleteIcon } from "assets/icons/delete_icon.svg";

const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.colors.grey};
  border: none;
  border-radius: 50px;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 12px;
  width: 24px;
  height: 24px;

  &:focus {
    box-shadow: 2px 4px 1px rgba(115, 124, 142, 0.3);
    outline: none;
  }

  svg {
    width: 100%;
    height: 100%;
  }
`;

const DeleteButton = (props) => (
  <StyledButton {...props}>
    <DeleteIcon />
  </StyledButton>
);

export default DeleteButton;
