import React from "react";
import "./MainHeading.css";

const MainHeading = (props) => {
  const { children } = props;
  return <h1 className=""> {children} </h1>;
};

export default MainHeading;
