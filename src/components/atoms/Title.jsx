import styled from "styled-components";

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.darkGrey};
  font-size: ${({ theme }) => theme.fontSize.xl};
`;

export default Title;
