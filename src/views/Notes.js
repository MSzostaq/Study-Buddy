import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { addNote } from "store";
import Button from "components/atoms/Button";
import FormField from "components/molecules/FormField";
import Note from "components/molecules/Note";

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
  const notes = useSelector((state) => state.notes);
  const dispatch = useDispatch();

  const handleAddNote = () => {
    dispatch(
      addNote({
        title: `New Note ${Math.floor(Math.random() * 10)}`,
        content: "Lorem ipsum dolor sit amet",
      })
    );
  };

  return (
    <Wrapper>
      <FormWrapper>
        <StyledFormField id="title" label="Title" name="title" />
        <StyledFormField
          isTextarea
          id="content"
          label="Content"
          name="content"
        />
        <Button onClick={handleAddNote}>Add</Button>
      </FormWrapper>
      <NotesWrapper>
        {notes.length ? (
          notes.map(({ id, content, title }) => (
            <Note id={id} key={id} content={content} title={title} />
          ))
        ) : (
          <p>Create your first note</p>
        )}
      </NotesWrapper>
    </Wrapper>
  );
};

export default Notes;
