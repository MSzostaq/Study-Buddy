import React from "react";
import styled from "styled-components";
import Button from "components/atoms/Button";
import FormField from "components/molecules/FormField";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 0.7fr 1.3fr;
  grid-gap: 28px;
  padding: 28px;
  width: 100%;
  height: 100%;
`;

const FormWrapper = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  padding: 36px;
  width: 100%;
  height: 80%;
`;

const StyledFormField = styled(FormField)`
  height: ${({ isTextarea }) => (isTextarea ? "280px" : "unset")};
`;

const NotesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 60px;
`;

const Notes = () => {
  return (
    <Wrapper>
      <FormWrapper>
        <StyledFormField id="title" label="Title" name="title" />
        <StyledFormField
          id="content"
          isTextarea
          label="Content"
          name="content"
        />
        <Button>Add</Button>
      </FormWrapper>
      <NotesWrapper></NotesWrapper>
    </Wrapper>
  );
};

export default Notes;
