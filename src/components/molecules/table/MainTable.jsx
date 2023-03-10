import React from "react";
import "./MainTable.css";
import TableHead from "./TableHead";
import TableRow from "./TableRow";

const MainTable = (props) => {
  const { attributeNames, columns, items, onEdit, onDelete } = props;

  return (
    <table>
      <TableHead columnNames={columns} />
      <tbody>
        {items.map((item, index) => {
          return (
            <TableRow
              key={index}
              item={item}
              attributeNames={attributeNames}
              onEdit={() => onEdit(index)}
              onDelete={() => onDelete(index)}
            ></TableRow>
          );
        })}
      </tbody>
    </table>
  );
};

export default MainTable;
