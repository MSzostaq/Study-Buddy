import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { UserShape } from "types";
import Average from "components/atoms/Average";
import DeleteButton from "components/atoms/DeleteButton";

const Wrapper = styled.li`
  cursor: pointer;
  display: flex;
  align-items: center;
  position: relative;

  &:not(:last-child)::after {
    background-color: ${({ theme }) => theme.colors.lightGrey};
    bottom: 0;
    content: "";
    position: absolute;
    width: 100%;
    height: 1px;
  }
`;

const StyledInfo = styled.div`
  padding: 12px 8px;

  p {
    margin: 0;
    color: ${({ theme }) => theme.colors.darkGrey};
  }

  p:first-child {
    display: flex;
    align-items: center;
    font-size: ${({ theme }) => theme.fontSize.l};
    font-weight: bold;
  }

  p:last-child {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;

const StudentsListItem = ({
  userData: { attendance = "0%", average, name },
  ...props
}) => {
  return (
    <Wrapper {...props}>
      <Average value={average}>{average}</Average>
      <StyledInfo>
        <p>
          {name}
          <DeleteButton />
        </p>
        <p>attendance: {attendance}</p>
      </StyledInfo>
    </Wrapper>
  );
};

StudentsListItem.propTypes = {
  userData: PropTypes.shape(UserShape),
};

export default StudentsListItem;
