import React, { useState, useEffect } from "react";
import "./Select.css";

const Select = (props) => {
  const { required, name, displayLabel, values, defaultValue, onValueChange } =
    props;

  const onSelectionChange = (e) => {
    e.preventDefault();
    onValueChange(e.target.value);
  };

  return (
    <>
      <label htmlFor={name}>{displayLabel}</label>
      <select
        id={name}
        name={name}
        required={required}
        value={defaultValue || ""}
        onChange={onSelectionChange}
      >
        {values.map((item, index) => (
          <option key={index} value={item.value}>
            {item.name}
          </option>
        ))}
      </select>
    </>
  );
};

Select.defaultProps = {};

export default Select;
