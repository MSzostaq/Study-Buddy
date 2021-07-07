import styled from "styled-components";

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.lightPurple};
  border: none;
  border-radius: 24px;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.3);
  color: ${({ theme }) => theme.colors.darkGrey};
  cursor: pointer;
  font-size: ${({ isBig, theme: { fontSize } }) =>
    isBig ? fontSize.m : fontSize.s};
  font-weight: bold;
  margin: 16px 0;
  padding: ${({ isBig }) => (isBig ? "10px 36px" : "8px 24px")};

  &:focus {
    outline: none;
  }
`;

export default Button;
