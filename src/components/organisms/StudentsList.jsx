import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useStudents } from "hooks/useStudents";
import Title from "components/atoms/Title";
import StudentsListItem from "components/molecules/StudentsListItem";

const StyledList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const StudentsList = () => {
  const [students, setStudents] = useState([]);
  const { id } = useParams();
  const { getStudents } = useStudents();

  useEffect(() => {
    (async () => {
      const students = await getStudents(id);
      setStudents(students);
    })();
  }, [getStudents, id]);

  return (
    <>
      <Title>Students list:</Title>
      <StyledList>
        {students.map((userData) => (
          <StudentsListItem key={userData.name} userData={userData} />
        ))}
      </StyledList>
    </>
  );
};

export default StudentsList;
