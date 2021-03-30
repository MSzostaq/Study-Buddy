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
    content: ''
    position: absolute;
    width: 100%;
    height: 1px;
  }
`;

const UsersListItem = ({ userData: { attendance = "0%", average, name } }) => (
  <Wrapper>
    <div>{average}</div>
    <div>
      <p>{name}</p>
      <p>{attendance}</p>
    </div>
    <Button />
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
