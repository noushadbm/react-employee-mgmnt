import React from "react";
import "./TableRow.css";

const TableRow = (props) => {
  const { item, attributeNames, onDelete } = props;
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
      </td>
    </tr>
  );
};

const getAsList = (items) => {
  return (
    <span>
      {items.map((item, index) => {
        return (
          <span key={index}>
            {item.key}:{item.value?item.value:'-'}{', '}
          </span>
        );
      })}
    </span>
  );
};

export default TableRow;
