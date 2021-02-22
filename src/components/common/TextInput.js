import React from "react";
import styled from "styled-components";

function TextInput({ name, label, orgRef, placeholder }) {
  return (
    <>
      <Label htmlFor={name}>{label}</Label>
      <Input
        type="text"
        name={name}
        id={name}
        ref={orgRef}
        placeholder={placeholder}
        autocomplete="off"
      />
    </>
  );
}

export default TextInput;

const Label = styled.label`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`;

const Input = styled.input`
  color: #ffffff;
  background-color: transparent;
  width: 100%;
  border: none;
  padding: 0 15px;

  ::placeholder,
  ::-webkit-input-placeholder {
    color: #ffffff;
  }
  :-ms-input-placeholder {
    color: #ffffff;
  }
`;
