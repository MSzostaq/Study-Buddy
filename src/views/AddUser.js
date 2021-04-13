import React, { useContext } from "react";
import { useForm } from "hooks/useForm";
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
  const { handleAddUser } = useContext(UsersContext);
  const {
    handleClearForm,
    formValues,
    handleInputChange,
    handleThrowError,
    handleToggleConsent,
  } = useForm(initialFromState);

  const handleSubmitUser = (e) => {
    e.preventDefault();
    if (formValues.consent) {
      handleAddUser(formValues);
      handleClearForm(initialFromState);
    } else {
      handleThrowError("You need to give consent");
    }
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
      <FormField
        label="Consent"
        id="consent"
        name="consent"
        type="checkbox"
        value={formValues.average}
        onChange={handleToggleConsent}
      />
      <Button type="submit">Add</Button>
      {formValues.error ? <p>{formValues.error}</p> : null}
    </ViewWrapper>
  );
};

export default AddUser;
