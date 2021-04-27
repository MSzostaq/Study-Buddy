import React, { useEffect, useState } from "react";
import { Link, Redirect, useParams } from "react-router-dom";
import { useStudents } from "hooks/useStudents";
import styled from "styled-components";
import Title from "components/atoms/Title";
import ViewWrapper from "components/molecules/ViewWrapper";
import StudentsList from "components/organisms/StudentsList";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px 48px;
  width: 100%;
  height: 100%;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;

  nav a {
    background-color: white;
    border-radius: 50px;
    color: ${({ theme }) => theme.colors.darkGrey};
    display: inline-block;
    font-weight: bold;
    margin-left: 15px;
    text-align: center;
    text-decoration: none;
    padding: 5px;
    width: 30px;
    height: 30px;
  }

  nav a:hover {
    background-color: ${({ theme }) => theme.colors.lightPurple};
  }
`;

const GroupWrapper = styled(ViewWrapper)`
  margin: 0;
`;

const Dashboard = () => {
  const [groups, setGroups] = useState([]);
  const { getGroups } = useStudents();
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      const groups = await getGroups();
      setGroups(groups);
    })();
  }, [getGroups]);

  if (!id && groups.length > 0) return <Redirect to={`/group/${groups[0]}`} />;

  return (
    <Wrapper>
      <TitleWrapper>
        <Title as="h2">Group {id}</Title>
        <nav>
          {groups.map((group) => (
            <Link key={group} to={`/group/${group}`}>
              {group}{" "}
            </Link>
          ))}
        </nav>
      </TitleWrapper>
      <GroupWrapper>
        <StudentsList />
      </GroupWrapper>
    </Wrapper>
  );
};

export default Dashboard;
