import React from "react";
import styled from "styled-components";
import Input from "components/atoms/Input";

const SearchBarWrapper = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.darkPurple};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  grid-row: 1 / 2;
  grid-column: 2 / 3;
  padding: 0 40px;

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

const SearchBar = () => (
  <SearchBarWrapper>
    <StatusInfo>
      <p>Logged as:</p>
      <p>
        <strong>Teacher</strong>
      </p>
      <Input />
    </StatusInfo>
  </SearchBarWrapper>
);

export default SearchBar;
