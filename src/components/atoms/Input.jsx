import styled from "styled-components";

const Input = styled.input`
  border: 1px solid ${({ theme }) => theme.colors.darkPurple};
  border-radius: 24px;
  box-shadow: 0 2px 2px 4px rgba(115, 124, 142, 0.09);
  box-sizing: border-box;
  font-size: ${({ theme }) => theme.fontSize.m};
  padding: 4px 12px;
  resize: none;

  &:focus {
    box-shadow: 0 2px 2px 4px rgba(115, 124, 142, 0.3);
    outline: none;
  }
`;

export default Input;
