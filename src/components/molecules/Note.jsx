import React from "react";
import styled from "styled-components";
import { useRemoveNoteMutation } from "store";
import DeleteButton from "components/atoms/DeleteButton";
import Title from "components/atoms/Title";

const NoteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 12px;
  position: relative;

  h3,
  p {
    color: ${({ theme }) => theme.colors.darkGrey};
  }
`;

const StyledDeleteButton = styled(DeleteButton)`
  posotion: absolute;
  top: 18px;
  left: 0;
`;

const Note = ({ id, content = "No content", title = "Untitled" }) => {
  const [removeNote] = useRemoveNoteMutation();

  const handleRemoveNote = () => {
    removeNote({ id: id });
  };

  return (
    <NoteWrapper>
      <Title>{title}</Title>
      <p>{content}</p>
      <StyledDeleteButton aria-label="Delete" onClick={handleRemoveNote} />
    </NoteWrapper>
  );
};

export default Note;
