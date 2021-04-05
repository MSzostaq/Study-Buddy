import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { GlobalStyle } from "assets/styles/globalStyle";
import { theme } from "assets/styles/theme";
import { users as usersData } from "data/users";
import MainTemplate from "components/templates/MainTemplate";
import AddUser from "views/AddUser";
import Dashboard from "views/Dashboard";

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.lightGrey};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

const initialFromState = {
  attendance: "",
  average: "",
  name: "",
};

const Root = () => {
  const [users, setUsers] = useState(usersData);
  const [formValues, setFormValues] = useState(initialFromState);

  const deleteUser = (name) => {
    const filteredUsers = users.filter((user) => user.name !== name);
    setUsers(filteredUsers);
  };

  const handleInputChange = (e) => {
    console.log(formValues);
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleAddUser = (e) => {
    e.preventDefault();
    const newUser = {
      attendance: formValues.attendance,
      average: formValues.average,
      name: formValues.name,
    };

    setUsers({ newUser, ...users });
    setFormValues(initialFromState);
  };

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainTemplate>
          <Wrapper>
            <Switch>
              <Route path="/add-user">
                <AddUser
                  formValues={formValues}
                  handleAddUser={handleAddUser}
                  handleInputChange={handleInputChange}
                />
              </Route>
              <Route path="/">
                <Dashboard deleteUser={deleteUser} users={users} />
              </Route>
            </Switch>
          </Wrapper>
        </MainTemplate>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
