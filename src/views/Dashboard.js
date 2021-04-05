import React from "react";
import PropTypes from "prop-types";
import { UserShape } from "types";
import ViewWrapper from "components/molecules/ViewWrapper";
import UsersList from "components/organisms/UsersList";

const Dashboard = ({ deleteUser, users }) => {
  return (
    <ViewWrapper>
      <UsersList deleteUser={deleteUser} users={users} />
    </ViewWrapper>
  );
};

Dashboard.propTypes = {
  deleteUser: PropTypes.func,
  users: PropTypes.arrayOf(PropTypes.shape(UserShape)),
};

export default Dashboard;
