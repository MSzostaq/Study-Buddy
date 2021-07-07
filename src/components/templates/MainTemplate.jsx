import React from "react";
import styled from "styled-components";
import Navigation from "components/organisms/Navigation";
import SearchBar from "components/organisms/SearchBar";
import NewsSection from "components/templates/NewsSection";
import NotesWidget from "components/organisms/NotesWidget";

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.lightGrey};
  display: grid;
  grid-template-columns: 150px 1fr 0.75fr;
  margin: 0;
  overflow-x: hidden;
  overflow-y: hidden;
  padding: 0;
  width: 100%;
  height: 100vh;
`;

const MainTemplate = ({ children }) => {
  return (
    <Wrapper>
      <Navigation />
      <SearchBar />
      {children}
      <NewsSection />
      <NotesWidget />
    </Wrapper>
  );
};

export default MainTemplate;
