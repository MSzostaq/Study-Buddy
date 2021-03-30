import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyle } from "assets/styles/globalStyle";
import { theme } from "assets/styles/theme";
import UsersList from "components/organisms/UsersList";

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.lightGrey};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

const Root = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Wrapper>
      <UsersList />
    </Wrapper>
  </ThemeProvider>
);

export default Root;
