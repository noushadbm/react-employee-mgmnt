import React from "react";
import "./EmployeeListPage.css";
import MainHeading from "../../atoms/MainHeading/MainHeading";
import MainTable from "../../molecules/table/MainTable";

const EmployeeListPage = (props) => {
  const attributeNames = ["id", "name", "department", "position", "salary"];
  const columns = ["ID", "Name", "Department", "Position", "Salary", "Actions"];
  const employees = [
    {
      id: 1,
      name: "John Doe",
      department: "Marketing",
      position: "Manager",
      salary: "80000",
    },
    {
      id: 2,
      name: "Jane Smith",
      department: "Human Resources",
      position: "Coordinator",
      salary: "50000",
    },
    {
      id: 3,
      name: "Bob Johnson",
      department: "Accounting",
      position: "Accountant",
      salary: "5000",
    },
  ];
  return (
    <div className="container">
      <MainHeading>Employee Management System</MainHeading>
      <MainTable attributeNames={attributeNames} columns={columns} items={employees}></MainTable>
    </div>
  );
};

export default EmployeeListPage;
