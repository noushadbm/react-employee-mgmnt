import React from "react";
import "./TableRow.css";

const TableRow = (props) => {
  const { item, attributeNames, onDelete, onEdit } = props;
  return (
    <tr>
      {attributeNames.map((attributeName, index) => {
        const isArray = item[attributeName] instanceof Array;
        return <td key={index}>{isArray ? getAsList(item[attributeName]) : item[attributeName]}</td>;
      })}
      <td className="action-panel">
        <a onClick={onDelete} href="#">
          Delete
        </a>
        <a onClick={onEdit} href="#">
          Edit
        </a>
      </td>
    </tr>
  );
};

const getAsList = (items) => {
  return (
    <ul>
      {items.map((item, index) => {
        return (
          <li key={index}>
            {item.key}:{item.value?item.value:'-'}
          </li>
        );
      })}
    </ul>
  );
};

export default TableRow;
