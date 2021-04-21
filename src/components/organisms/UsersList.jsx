import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useStudents } from "hooks/useStudents";
import Title from "components/atoms/Title";
import UsersListItem from "components/molecules/UsersListItem";

const StyledList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const UsersList = () => {
  const { id } = useParams();
  const { students } = useStudents({ groupId: id });

  return (
    <>
      <Title>Students list:</Title>
      <StyledList>
        {students.map((userData) => (
          <UsersListItem key={userData.name} userData={userData} />
        ))}
      </StyledList>
    </>
  );
};

export default UsersList;
