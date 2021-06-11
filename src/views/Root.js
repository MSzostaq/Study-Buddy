import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import { useAuth } from "hooks/useAuth";
import { useError } from "hooks/useError";
import { useForm } from "react-hook-form";
import Button from "components/atoms/Button";
import ErrorMessage from "components/molecules/ErrorMessage";
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

const UnauthenticatedApp = () => {
  const auth = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form
      onSubmit={handleSubmit(auth.signIn)}
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
    </form>
  );
};

const Root = () => {
  const auth = useAuth();
  const { error } = useError();

  return (
    <>
      {error ? <ErrorMessage /> : null}
      {auth.user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </>
  );
};

export default Root;
