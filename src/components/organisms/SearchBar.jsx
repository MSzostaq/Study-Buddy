import React from "react";
import styled from "styled-components";
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
