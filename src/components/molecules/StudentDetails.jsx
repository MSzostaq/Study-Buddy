import styled from "styled-components";
import Title from "components/atoms/Title";

const StyledAverage = styled.div`
  background: ${({ theme, value }) => {
    if (value > 4) return theme.colors.succes;
    if (value > 3) return theme.colors.warning;
    if (value > 1) return theme.colors.error;
    return theme.colors.grey;
  }};
  border-radius: 50px;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
`;

const StudentDetails = ({ currentStudent }) => {
  return (
    <div>
      <Title>{currentStudent.name}</Title>
      <p>{currentStudent.attendance}</p>
      <StyledAverage value={currentStudent.average}></StyledAverage>
      <Title>{currentStudent.name}</Title>
    </div>
  );
};

export default StudentDetails;
