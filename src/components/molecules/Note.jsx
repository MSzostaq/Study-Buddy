import React from "react";
import styled from "styled-components";
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
  left: -40px;
`;

const Note = () => {
  return (
    <NoteWrapper>
      <Title></Title>
      <p></p>
      <StyledDeleteButton />
    </NoteWrapper>
  );
};

export default Note;
