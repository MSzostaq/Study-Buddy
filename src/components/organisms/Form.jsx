import React from "react";
import styled from "styled-components";
import FormField from "components/molecules/FormField";
import Button from "components/atoms/Button";

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 25px;
  box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.3);
  margin: 24px;
  padding: 40px 30px;
  width: 100%;
  max-width: 500px;
`;

const StyledTitle = styled.h1`
  color: ${({ theme }) => theme.colors.darkGrey};
  font-size: ${({ theme }) => theme.fontSize.xl};
`;

const Form = ({ formValues, handleAddUser, handleInputChange }) => {
  return (
    <>
      <Wrapper as="form" onSubmit={handleAddUser}>
        <StyledTitle>Add new student</StyledTitle>
        <FormField
          label="Name"
          id="name"
          name="name"
          value={formValues.name}
          onChange={handleInputChange}
        />
        <FormField
          label="Attendance"
          id="attendance"
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
      </Wrapper>
    </>
  );
};

export default Form;
