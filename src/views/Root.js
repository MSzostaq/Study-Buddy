import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { GlobalStyle } from "assets/styles/globalStyle";
import { theme } from "assets/styles/theme";
import UsersProvider from "providers/UsersProvider";
import MainTemplate from "components/templates/MainTemplate";
import AddUser from "views/AddUser";
import Dashboard from "views/Dashboard";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const Root = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainTemplate>
          <UsersProvider>
            <Wrapper>
              <Switch>
                <Route path="/add-user">
                  <AddUser />
                </Route>
                <Route path="/">
                  <Dashboard />
                </Route>
              </Switch>
            </Wrapper>
          </UsersProvider>
        </MainTemplate>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
