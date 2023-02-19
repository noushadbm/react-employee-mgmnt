import React from "react";
import "./Select.css";

const Select = (props) => {
  const { required, name, displayLabel, values } = props;
  return (
    <>
      <label htmlFor={name}>{displayLabel}</label>
      <select id={name} name={name} required={required}>
        {values.map((item, index) => (
          <option key={index} value={item.value}>{item.name}</option>
        ))}
      </select>
    </>
  );
};

export default Select;
