import React from "react";
import "./SubmitButton.css";

const SubmitButton = (props) => {
  const { children, onSubmit } = props;
  return <button type="submit">{children}</button>;
};

export default SubmitButton;
