import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import ViewWrapper from "components/molecules/ViewWrapper";
import UsersList from "components/organisms/UsersList";

const Dashboard = () => {
  const [groups, setGroups] = useState([]);
  const [students, setStudents] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get("/groups")
      .then(({ data }) => setGroups(data.groups))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get(`/students/${id || groups[0]}`)
      .then(({ data }) => setStudents(data.students))
      .catch((err) => console.log(err));
  }, [id, groups]);

  return (
    <ViewWrapper>
      <nav>
        {groups.map((group) => (
          <Link key={group} to={`/group/${group}`}>
            {group}{" "}
          </Link>
        ))}
      </nav>
      <UsersList users={students} />
    </ViewWrapper>
  );
};

export default Dashboard;
