import React from "react";
import styled from "styled-components";
import { ReactComponent as DeleteIcon } from "assets/icons/delete_icon.svg";

export const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.colors.grey};
  border: none;
  border-radius: 50px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;

  svg {
    width: 100%;
    height: 100%;
  }
`;

const Button = () => (
  <StyledButton>
    <DeleteIcon />
  </StyledButton>
);

export default Button;
