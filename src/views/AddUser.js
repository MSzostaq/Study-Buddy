import React from "react";
import PropTypes from "prop-types";
import FormField from "components/molecules/FormField";
import { UserShape } from "types";
import Button from "components/atoms/Button";
import Title from "components/atoms/Title";
import ViewWrapper from "components/molecules/ViewWrapper";

const AddUser = ({ formValues, handleAddUser, handleInputChange }) => {
  return (
    <ViewWrapper as="form" onSubmit={handleAddUser}>
      <Title>Add new student</Title>
      <FormField
        label="Name"
        id="name"
        name="name"
        value={formValues.name}
        onChange={handleInputChange}
      />
      <FormField
        label="Attendance"
        id="atttendance"
        name="attendance"
        value={formValues.attendance}
        onChange={handleInputChange}
      />
      <FormField
        label="Average"
        id="average"
        name="average"
        value={formValues.average}
        onChange={handleInputChange}
      />
      <Button type="submit">Add</Button>
    </ViewWrapper>
  );
};

AddUser.propTypes = {
  formValues: PropTypes.shape(UserShape),
  handleAddUser: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired,
};

export default AddUser;
