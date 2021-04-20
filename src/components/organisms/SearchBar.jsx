import React, { useEffect, useState } from "react";
import debounce from "lodash.debounce";
import styled from "styled-components";
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
  display: flex;
  flex-direction: column;
  list-style: none;
  overflow-y: scroll;
  padding: 10px;
  position: absolute;
  left: 0;
  top: 30px;
  z-index: 1000;
  max-height: 500px;
  width: 100%;

  li {
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.darkGrey};
    font-weight: bold;
    padding: 20px 5px;
    width: 100%;
  }

  li:hover,
  li:focus {
    background-color: ${({ theme }) => theme.colors.lightPurple};
  }

  li:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.darkPurple};
  }
`;

const SearchBar = () => {
  const [searchPhrase, setSearchPhrase] = useState("");
  const [matchingStudents, setMatchingStudents] = useState("");
  const { findStudents } = useStudents();

  const getMatchingStudents = debounce(async (e) => {
    const { students } = await findStudents(searchPhrase);
    setMatchingStudents(students);
  }, 500);

  useEffect(() => {
    if (!searchPhrase) return;
    getMatchingStudents(searchPhrase);
  }, [searchPhrase, getMatchingStudents]);
  return (
    <SearchBarWrapper>
      <StatusInfo>
        <p>Logged as:</p>
        <p>
          <strong>Teacher</strong>
        </p>
      </StatusInfo>
      <SearchWrapper>
        <Input
          onChange={(e) => setSearchPhrase(e.target.value)}
          value={searchPhrase}
          name="Search"
          id="Search"
        />
        {searchPhrase && matchingStudents.length ? (
          <SearchResults>
            {matchingStudents.map((students) => (
              <li key={student.id}>{student.map}</li>
            ))}
          </SearchResults>
        ) : null}
      </SearchWrapper>
    </SearchBarWrapper>
  );
};

export default SearchBar;
