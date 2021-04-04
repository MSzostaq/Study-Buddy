import styled from "styled-components";

const Input = styled.input`
  border: 1px solid ${({ theme }) => theme.colors.darkPurple};
  border-radius: 24px;
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
  box-sizing: border-box;
  padding: 4px 8px;

  &:focus {
    box-shadow: -2px 4px 1-px rgba(115, 124, 142, 0.3);
    outline: none;
  }
`;

export default Input;
