import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  border-right: 1px solid ${({ theme }) => theme.colors.darkPurple};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 32px 0;
  width: 100%;
  height: 100%;
`;

const Logo = styled.div`
  background-color: ${({ theme }) => theme.colors.darkGrey};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 32px;
  width: 100%;
  height: 60px;

  h1 {
    color: ${({ theme }) => theme.colors.white};
    font-size: 14px;
    margin-right: 20px;
    text-align: right;
  }
`;

const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.colors.darkGrey};
  font-weight: bold;
  margin: 16px 20px 16px auto;
  text-align: right;
  text-decoration: none;
`;

const Navigation = () => {
  return (
    <Wrapper>
      <Logo>
        <h1>
          Study
          <br />
          Buddy
        </h1>
      </Logo>
      <StyledLink to="/">Dashboard</StyledLink>
      <StyledLink to="/add-user">Add user</StyledLink>
      <StyledLink to="/">Settings</StyledLink>
      <StyledLink to="/">Logout</StyledLink>
    </Wrapper>
  );
};

export default Navigation;
