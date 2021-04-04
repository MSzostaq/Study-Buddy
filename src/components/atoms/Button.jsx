import styled from "styled-components";

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.lightPurple};
  border: none;
  border-radius: 24px;
  color: ${({ theme }) => theme.colors.darkGrey};
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: bold;
  margin: 16px 0;
  padding: 8px 24px;
`;

export default Button;
