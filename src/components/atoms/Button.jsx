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
  width: 24px;
  height: 24px;

  svg {
    width: 100%;
    height: 100%;
  }
`;

const Button = (props) => (
  <StyledButton {...props}>
    <DeleteIcon />
  </StyledButton>
);

export default Button;
