import React from "react";
import styled from "styled-components";
import Navigation from "components/organisms/Navigation";
import SearchBar from "components/organisms/SearchBar";

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.lightGrey};
  display: grid;
  grid-template-columns: 150px 1fr 0.75fr;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100vh;
`;

const NewsSection = styled.div`
  border-left: 1px solid ${({ theme }) => theme.colors.darkPurple};
  grid-row: 1 / 3;
  grid-column: 3 / 3;
`;

const MainTemplate = ({ children }) => {
  return (
    <Wrapper>
      <Navigation />
      <SearchBar />
      {children}
      <NewsSection>
        <p>Lorem ipsum</p>
        <p>Lorem ipsum</p>
        <p>Lorem ipsum</p>
        <p>Lorem ipsum</p>
        <p>Lorem ipsum</p>
      </NewsSection>
    </Wrapper>
  );
};

export default MainTemplate;
