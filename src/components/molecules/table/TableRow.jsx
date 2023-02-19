import React from "react";
import './TableRow.css';

const TableRow = (props) => {
  const { item, attributeNames } = props;
  return (
    <tr>
      {attributeNames.map((attributeName, index) => {
        return <td key={index}>{item[attributeName]}</td>;
      })}
      <td className="action-panel">
        <a href="#">Edit</a>
        <a href="#">Delete</a>
      </td>
    </tr>
  );
};

export default TableRow;
