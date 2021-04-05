import styled from "styled-components";

const ViewWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 24px;
  box-shadow: 0 4px 16px -12px rgba(0, 0, 0, 0.3);
  margin: 24px;
  padding: 42px 48px;
  width: 100%;
  max-width: 500px;
`;

export default ViewWrapper;
