import React, { PropTypes } from "react";
import "./Input.css";

const Input = (props) => {
  const { required, name, displayLabel, type } = props;

  return (
    <>
      <label htmlFor={name}>{displayLabel}</label>
      <input type={type} id={name} name={name} required={required}></input>
    </>
  );
};

Input.defaultProps = {
  required: false,
  type: "text",
};

Input.propTypes = {};

export default Input;
