import React from "react";
import styled from "styled-components";
import Navigation from "components/organisms/Navigation";

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.lightGrey};
  display: grid;
  grid-template-columns: 150px 1fr;
  margin: 0;
  overflow-x: scroll;
  padding: 0;
  width: 100%;
  height: 100vh;
`;

const MainTemplate = ({ children }) => {
  return (
    <Wrapper>
      <Navigation />
      {children}
    </Wrapper>
  );
};

export default MainTemplate;
