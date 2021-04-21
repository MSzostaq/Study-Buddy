import styled from "styled-components";

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.lightPurple};
  border: none;
  border-radius: 24px;
  color: ${({ theme }) => theme.colors.darkGrey};
  cursor: pointer;
  font-size: ${({ isBig, theme: { fontSize } }) =>
    isBig ? fontSize.m : fontSize.s};
  font-weight: bold;
  margin: 16px 0;
  padding: ${({ isBig }) => (isBig ? "10px 36px" : "8px 24px")};

  &:focus {
    box-shadow: 2px 4px 1px rgba(115, 124, 142, 0.3);
    outline: none;
  }
`;

export default Button;
