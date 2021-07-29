import React, { useState } from "react";
import styled from "styled-components";
import { useGetNotesQuery } from "store";
import Note from "components/molecules/Note";

const Wrapper = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border: 2px solid ${({ theme }) => theme.colors.darkGrey};
  position: absolute;
  top: 40px;
  right: 0;
  transform: ${({ isOpen }) =>
    isOpen ? "translateX(0)" : "translateX(400px)"};
  transition: transform 0.6s ease-in-out;
  width: 400px;
  height: auto;
  max-height: 700px;
`;

const WidgetHandler = styled.button`
  background-color: ${({ theme }) => theme.colors.darkGrey};
  border: none;
  border-radius: 8px 8px 0 0;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  position: absolute;
  top: 40px;
  left: -55px;
  transform: rotate(-90deg);
  width: 80px;
  height: 28px;
`;

const NotesWrapper = styled.div`
  diplay: flex;
  flex-direction: column;
  max-height: 700px;
  overflow-y: scroll;
  padding: 20px 40px;
`;

const NotesWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data, isLoading } = useGetNotesQuery();

  const handleToggleWidget = () => setIsOpen((prevState) => !prevState);

  return (
    <Wrapper isOpen={isOpen}>
      <WidgetHandler onClick={handleToggleWidget}>notes</WidgetHandler>
      {isLoading ? (
        <h3>Loading...</h3>
      ) : (
        <NotesWrapper>
          {data.notes.length ? (
            data.notes.map(({ id, title, content }) => (
              <Note id={id} key={id} title={title} content={content} />
            ))
          ) : (
            <p>Create your first note</p>
          )}
        </NotesWrapper>
      )}
    </Wrapper>
  );
};

export default NotesWidget;
