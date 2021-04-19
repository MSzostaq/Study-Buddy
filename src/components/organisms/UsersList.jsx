import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { UserShape } from "types";
import Title from "components/atoms/Title";
import UsersListItem from "components/molecules/UsersListItem";

const StyledList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const UsersList = ({ users = [] }) => {
  return (
    <>
      <Title>Students list:</Title>
      <StyledList>
        {users.map((userData) => (
          <UsersListItem key={userData.name} userData={userData} />
        ))}
      </StyledList>
    </>
  );
};

UsersList.propTypes = {
  deleteUser: PropTypes.func,
  users: PropTypes.arrayOf(PropTypes.shape(UserShape)),
};

export default UsersList;
