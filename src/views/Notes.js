import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { addNote } from "store";
import { useForm } from "react-hook-form";
import Button from "components/atoms/Button";
import FormField from "components/molecules/FormField";
import Note from "components/molecules/Note";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 0.7fr 1.3fr;
  grid-gap: 12px;
  padding: 28px;
  width: 100%;
  height: 100%;
`;

const FormWrapper = styled.div`
  border-radius: 24px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  padding: 36px;
  width: 100%;
  height: 100%;
`;

const StyledFormField = styled(FormField)`
  height: ${({ isTextarea }) => (isTextarea ? "280px" : "unset")};
`;

const StyledButton = styled(Button)`
  height: 32px;
  width: 120px;
`;

const NotesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 60px;
`;

const Notes = () => {
  const notes = useSelector((state) => state.notes);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleAddNote = ({ title, content }) => {
    dispatch(
      addNote({
        title,
        content,
      })
    );
  };

  return (
    <Wrapper>
      <FormWrapper onSubmit={handleSubmit(handleAddNote)}>
        <StyledFormField
          {...register("title", { required: true })}
          label="Title"
          name="title"
          id="title"
        />
        <StyledFormField
          {...register("content", { required: true })}
          isTextarea
          label="Content"
          name="content"
          id="content"
        />
        {errors.title && <span>Title is required</span>}
        {errors.content && <span>Content is required</span>}
        <StyledButton type="submit">Add</StyledButton>
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
