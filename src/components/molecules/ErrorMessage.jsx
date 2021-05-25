import React from "react";
import PropTypes from "prop-types";
import styled, { keyframes } from "styled-components";
import Title from "components/atoms/Title";

const slideAnimation = keyframes`
  from {
    transform: translateX(-50%) translateY(500%);
  }
  to {
    transform: translateX(-50%) translateY(0);
  }
`;

const shrinkAnimation = keyframes`
  from {
    transform: translateX(-50%) scaleX(1)
  }
  to {
    transform: translateX(-50%) scaleX(0)
  }
`;

const Wrapper = styled.div`
  animation: ${slideAnimation} 1s ease-in-out 1 forwards,
    ${slideAnimation} 1s 6s ease-in-out reverse forwards;
  background-color: ${({ theme }) => theme.colors.white};
  border: 2px solid ${({ theme }) => theme.colors.error};
  border-radius: 16px;
  color: ${({ theme }) => theme.colors.error};
  padding: 24px 24px 16px;
  position: absolute;
  left: 50%;
  bottom: 10%;
  transform: translateX(-50%);

  ${Title} {
    color: ${({ theme }) => theme.colors.error};
  }

  &::before,
  &::after {
    background-color: ${({ theme }) => theme.colors.error};
    border-radius: 50px;
    content: "";
    position: absolute;
    top: 15px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 5px;
  }
  &::before {
    opacity: 0.5;
  }
  &::after {
    animation: ${shrinkAnimation} 5s 1s linear 1 forwards;
    transform-origin: left top;
    transform: translateX(-50%) scaleX(1);
  }
`;

const defaultErrorMessage =
  "Something went wrong. Please try again, or contact our support.";

const ErrorMessage = ({ message = defaultErrorMessage }) => {
  return (
    <Wrapper>
      <Title>Oops!</Title>
      <p>{message}</p>
    </Wrapper>
  );
};

ErrorMessage.propTypes = {
  message: PropTypes.string,
};

export default ErrorMessage;
