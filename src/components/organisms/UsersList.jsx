import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { UserShape } from "types";
import UsersListItem from "components/molecules/UsersListItem";
import Title from "components/atoms/Title";

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 25px;
  box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.3);
  margin: 24px;
  padding: 40px 30px;
  width: 100%;
  max-width: 500px;
`;

const StyledList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const UsersList = ({ users, deleteUser }) => {
  return (
    <>
      <Wrapper>
        <Title>Students list:</Title>
        <StyledList>
          {users.map((userData) => (
            <UsersListItem
              deleteUser={deleteUser}
              key={userData.name}
              userData={userData}
            />
          ))}
        </StyledList>
      </Wrapper>
    </>
  );
};

UsersList.propTypes = {
  deleteUser: PropTypes.func,
  users: PropTypes.arrayOf(PropTypes.shape(UserShape)),
};

export default UsersList;
