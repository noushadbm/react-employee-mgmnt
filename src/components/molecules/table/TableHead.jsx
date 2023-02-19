import React from "react";
import "./TableHead.css";

const TableHead = (props) => {
  const { columnNames } = props;

  return (
    <>
      <thead>
        <tr>
          {columnNames.map((columnName, index) => (
            <th key={index} className="middle">
              {columnName}
            </th>
          ))}
        </tr>
      </thead>
    </>
  );
};

export default TableHead;
