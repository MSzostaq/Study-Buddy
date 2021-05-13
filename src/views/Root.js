import React from "react";
import styled, { ThemeProvider } from "styled-components";
import axios from "axios";
import { useForm } from "react-hook-form";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { GlobalStyle } from "assets/styles/globalStyle";
import { theme } from "assets/styles/theme";
import Button from "components/atoms/Button";
import FormField from "components/molecules/FormField";
import MainTemplate from "components/templates/MainTemplate";
import Dashboard from "views/Dashboard";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const AuthenticatedApp = () => {
  return (
    <MainTemplate>
      <Wrapper>
        <Switch>
          <Route exact path="/">
            <Redirect to="/group" />
          </Route>
          <Route path="/group/:id?">
            <Dashboard />
          </Route>
        </Switch>
      </Wrapper>
    </MainTemplate>
  );
};

const UnauthenticatedApp = ({ handleSignIn, loginError }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form
      onSubmit={handleSubmit(handleSignIn)}
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <FormField
        label="login"
        name="login"
        id="login"
        {...register("login", { required: true })}
      />
      {errors.login && <span>Login is required</span>}
      <FormField
        label="password"
        name="password"
        id="password"
        type="password"
        {...register("password", { required: true })}
      />
      {errors.password && <span>Password is required</span>}
      <Button type="submit">Sign in</Button>
      {loginError && <span>{loginError}</span>}
    </form>
  );
};

const Root = () => {
  const [user, setUser] = React.useState(null);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      (async () => {
        try {
          const response = await axios.get("/me", {
            headers: {
              authorization: `Bearer ${token}`,
            },
          });
          setUser(response.data);
        } catch (e) {
          console.log(e);
        }
      })();
    }
  }, []);

  const handleSignIn = async ({ login, password }) => {
    try {
      const response = await axios.post("/login", {
        login,
        password,
      });
      setUser(response.data);
      localStorage.setItem("token", response.data.token);
    } catch (e) {
      setError("Please provide valid user data");
    }
  };

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {user ? (
          <AuthenticatedApp />
        ) : (
          <UnauthenticatedApp loginError={error} handleSignIn={handleSignIn} />
        )}
      </ThemeProvider>
    </Router>
  );
};

export default Root;
