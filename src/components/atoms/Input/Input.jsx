import React, { PropTypes } from "react";
import "./Input.css";

const Input = (props) => {
  const { required, name, displayLabel, type, value, onChange } = props;

  const handleChange = (e) => {
    e.preventDefault();
    onChange(e.target.value);
  };

  return (
    <>
      <label htmlFor={name}>{displayLabel}</label>
      <input
        type={type}
        id={name}
        name={name}
        required={required}
        defaultValue={value}
        onChange={handleChange}
      ></input>
    </>
  );
};

Input.defaultProps = {
  required: false,
  type: "text",
  onChange: () => {},
};

Input.propTypes = {};

export default Input;
