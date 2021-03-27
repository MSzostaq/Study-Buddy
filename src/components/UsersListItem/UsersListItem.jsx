import React from "react";
import PropTypes from "prop-types";

const UsersListItem = ({ userData: { attendance = "0%", average, name } }) => (
  <li>
    <div>{average}</div>
    <div>
      <p>{name}</p>
      <p>{attendance}</p>
    </div>
    <button>x</button>
  </li>
);

UsersListItem.propTypes = {
  userData: PropTypes.shape({
    attendance: PropTypes.string,
    average: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }),
};

export default UsersListItem;
