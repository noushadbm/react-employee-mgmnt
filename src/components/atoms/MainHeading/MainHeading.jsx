import React from "react";
import "./MainHeading.css";

const MainHeading = (props) => {
  const { title, children } = props;
  return (
    <div className="title">
      <h1 className=""> {title} </h1>
      {children}
    </div>
  );
};

export default MainHeading;
