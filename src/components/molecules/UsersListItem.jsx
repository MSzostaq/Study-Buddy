import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Button from "components/atoms/Button";

const Wrapper = styled.li`
  align-items: center;
  display: flex;
  position: relative;

  &:not(:last-child)::after {
    background-color: lightgrey;
    bottom: 0;
    content: "";
    position: absolute;
    width: 100%;
    height: 1px;
  }
`;

const StyledInfo = styled.div`
  padding: 25px 20px;

  p {
    margin: 0;
    color: ${({ theme }) => theme.colors.darkGrey};
  }

  p:first-child {
    display: flex;
    align-items: center;
    font-size: ${({ theme }) => theme.fontSize.l};
    font-weight: bold;
  }

  p:last-child {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;

const StyledAverage = styled.div`
  background: ${({ theme, value }) => {
    if (value > 4) return theme.colors.succes;
    if (value > 3) return theme.colors.warning;
    if (value > 2) return theme.colors.error;
    return theme.colors.grey;
  }};
  border-radius: 50px;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
`;

const UsersListItem = ({
  deleteUser,
  userData: { attendance = "0%", average, name },
}) => (
  <Wrapper>
    <StyledAverage value={average}>{average}</StyledAverage>
    <StyledInfo>
      <p>
        {name}
        <Button onClick={() => deleteUser(name)} />
      </p>
      <p>attendance: {attendance}</p>
    </StyledInfo>
  </Wrapper>
);

UsersListItem.propTypes = {
  userData: PropTypes.shape({
    attendance: PropTypes.string,
    average: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }),
};

export default UsersListItem;
