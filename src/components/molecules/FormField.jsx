import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Input from "components/atoms/Input";
import Label from "components/atoms/Label";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  ${Label} {
    margin: 8px 0;
  }
`;

const FormField = React.forwardRef(
  (
    { id, label, name, onChange, type = "text", value, isTextarea, ...props },
    ref
  ) => {
    return (
      <Wrapper>
        <Label htmlFor={id}>{label}</Label>
        {isTextarea ? (
          <Input
            isTextarea
            as="textarea"
            id={id}
            name={name}
            value={value}
            onChange={onChange}
            data-testid={label}
            {...props}
            ref={ref}
          />
        ) : (
          <Input
            id={id}
            name={name}
            type={type}
            value={value}
            onChange={onChange}
            data-testid={label}
            {...props}
            ref={ref}
          />
        )}
      </Wrapper>
    );
  }
);

FormField.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default FormField;
