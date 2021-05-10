import styled from "styled-components";
import Average from "components/atoms/Average";
import Title from "components/atoms/Title";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 40px;
  position: relative;
  width: 100%;
`;

const StyledAverage = styled(Average)`
  font-size: ${({ theme }) => theme.fontSize.xl};
  position: absolute;
  left: 40px;
  width: 68px;
  height: 68px;
`;

const StyledDetails = styled.div`
  padding: 40px;
  width: 100%;
`;

const StyledLabel = styled.h3`
  color: ${({ theme }) => theme.colors.darkGrey};
  font-size: ${({ theme }) => theme.fontSize.l};
`;

const StyledInfo = styled.p`
  color: ${({ theme }) => theme.colors.darkGrey};
  font-size: ${({ theme, isBig }) =>
    isBig ? theme.fontSize.xl : theme.fontSize.l};
  margin-right: 20px;
`;

const StyledSubjectInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 250px;
`;

const StudentDetails = ({ student }) => {
  return (
    <Wrapper>
      <StyledAverage value={student.average}>{student.average}</StyledAverage>
      <Title isBig>{student.name}</Title>
      <StyledDetails>
        <StyledLabel>Course:</StyledLabel>
        <StyledInfo isBig>{student.course}</StyledInfo>
        <StyledLabel>Average grades:</StyledLabel>
        {student.grades.map(({ subject, average }) => (
          <StyledSubjectInfo key={subject}>
            <StyledInfo>{subject}</StyledInfo>
            <Average value={average}>{average}</Average>
          </StyledSubjectInfo>
        ))}
      </StyledDetails>
    </Wrapper>
  );
};

export default StudentDetails;
