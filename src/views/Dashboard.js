import React, { useContext } from "react";
import { UsersContext } from "providers/UsersProvider";
import ViewWrapper from "components/molecules/ViewWrapper";
import UsersList from "components/organisms/UsersList";

const Dashboard = () => {
  const { users } = useContext(UsersContext);

  return (
    <ViewWrapper>
      <UsersList users={users} />
    </ViewWrapper>
  );
};

export default Dashboard;
