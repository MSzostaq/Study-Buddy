import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useAuth } from "hooks/useAuth";

const Wrapper = styled.nav`
  border-right: 1px solid ${({ theme }) => theme.colors.darkPurple};
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  grid-row: 1 / 3;
  grid-column: 1 / 1;
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

const activeClassName = "active-link";
const StyledLink = styled(NavLink).attrs({
  activeClassName,
})`
  color: ${({ theme }) => theme.colors.darkGrey};
  cursor: pointer;
  font-weight: bold;
  margin: 16px 20px 16px auto;
  position: relative;
  text-align: right;
  text-decoration: none;

  &.${activeClassName} {
    &::after {
      opacity: 1;
    }
  }

  &::after {
    background-color: ${({ theme }) => theme.colors.darkPurple};
    content: "";
    opacity: 0;
    position: absolute;
    right: -20px;
    top: 50%;
    transition: opacity 0.3s ease-in-out;
    transform: translateY(-50%);
    width: 18px;
    height: 3px;
  }
`;

const Navigation = () => {
  const auth = useAuth();

  return (
    <Wrapper>
      <Logo>
        <h1>
          Study
          <br />
          Buddy
        </h1>
      </Logo>
      <StyledLink to="/group">Dashboard</StyledLink>
      <StyledLink as="a" onClick={auth.signOut}>
        Logout
      </StyledLink>
    </Wrapper>
  );
};

export default Navigation;
