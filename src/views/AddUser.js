import React, { useContext, useState } from "react";
import FormField from "components/molecules/FormField";
import { UsersContext } from "providers/UsersProvider";
import Button from "components/atoms/Button";
import Title from "components/atoms/Title";
import ViewWrapper from "components/molecules/ViewWrapper";

const initialFromState = {
  attendance: "",
  average: "",
  name: "",
};

const AddUser = () => {
  const [formValues, setFormValues] = useState(initialFromState);
  const { handleAddUser } = useContext(UsersContext);

  const handleInputChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmitUser = (e) => {
    e.preventDefault();
    handleAddUser(formValues);
    setFormValues(initialFromState);
  };

  return (
    <ViewWrapper as="form" onSubmit={handleSubmitUser}>
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

export default AddUser;
