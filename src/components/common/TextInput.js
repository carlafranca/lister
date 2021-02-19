import React from "react";

function TextInput({ name, label, value, onChange, placeholder }) {
  return (
    <>
      <label htmlFor={name} className="visuallyhidden">
        {label}
      </label>
      <input
        type="text"
        name={name}
        id={name}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </>
  );
}

export default TextInput;
