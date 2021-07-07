import React, { useState } from "react";
import debounce from "lodash.debounce";
import styled from "styled-components";
import { useCombobox } from "downshift";
import { useStudents } from "hooks/useStudents";
import Input from "components/atoms/Input";

const SearchBarWrapper = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.darkPurple};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  grid-row: 1 / 2;
  grid-column: 2 / 3;
  padding: 0 40px;
  height: 90px;

  ${Input} {
    border: 2px solid ${({ theme }) => theme.colors.lightPurple};
    font-size: ${({ theme }) => theme.fontSize.xl};
    width: 100%;
    max-width: 360px;
  }
`;

const StatusInfo = styled.div`
  color: ${({ theme }) => theme.colors.darkGrey};
  font-size: ${({ theme }) => theme.fontSize.l};
  margin-right: 40px;

  p {
    margin: 4px;
  }
`;

const SearchWrapper = styled.div`
  position: relative;
`;

const SearchResults = styled.ul`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 15px;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  list-style: none;
  overflow-y: scroll;
  padding: 10px;
  position: absolute;
  left: 0;
  top: 30px;
  visibility: ${({ isVisible }) => (isVisible ? "visible" : "hidden")};
  z-index: 1000;
  max-height: 500px;
  width: 100%;
`;

const SearchResultsItem = styled.li`
  background-color: ${({ theme, isHighlited }) =>
    isHighlited ? theme.colors.lightPurple : theme.colors.white};
  color: ${({ theme }) => theme.colors.darkGrey};
  font-weight: bold;
  padding: 20px 5px;
  width: 100%;

  &:hover {
    background-color: ${({ theme }) => theme.colors.lightPurple};
  }

  &:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.darkPurple};
  }
`;

const SearchBar = () => {
  const [matchingStudents, setMatchingStudents] = useState([]);
  const { findStudents } = useStudents();

  const getMatchingStudents = debounce(async ({ inputValue }) => {
    const { students } = await findStudents(inputValue);
    setMatchingStudents(students);
  }, 500);

  const {
    isOpen,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    highlightedIndex,
    getItemProps,
  } = useCombobox({
    items: matchingStudents,
    onInputValueChange: getMatchingStudents,
  });

  return (
    <SearchBarWrapper>
      <StatusInfo>
        <p>Logged as:</p>
        <p>
          <strong>Teacher</strong>
        </p>
      </StatusInfo>
      <SearchWrapper {...getComboboxProps()}>
        <Input
          {...getInputProps()}
          name="Search"
          id="Search"
          placeholder="Search"
        />
        <SearchResults
          isVisible={isOpen && matchingStudents.length > 0}
          {...getMenuProps()}
          aria-label="results"
        >
          {isOpen &&
            matchingStudents.map((item, index) => (
              <SearchResultsItem
                isHighlited={highlightedIndex === index}
                {...getItemProps({ item, index })}
                key={item.id}
              >
                {item.name}
              </SearchResultsItem>
            ))}
        </SearchResults>
      </SearchWrapper>
    </SearchBarWrapper>
  );
};

export default SearchBar;
