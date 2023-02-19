import React from "react";
import "./EmployeeListPage.css";
import MainHeading from "../../atoms/MainHeading/MainHeading";
import MainTable from "../../molecules/table/MainTable";
import Button from "../../atoms/Button/Button";

const EmployeeListPage = (props) => {
  const attributeNames = [
    "id",
    "name",
    "email",
    "department",
    "position",
    "salary",
  ];
  const columns = [
    "ID",
    "Name",
    "Email",
    "Department",
    "Position",
    "Salary",
    "Actions",
  ];
  const employees = [
    {
      id: 1,
      name: "John Doe",
      email: "rambo@test.com",
      department: "Marketing",
      position: "Manager",
      salary: "80000",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "smit@test.com",
      department: "Human Resources",
      position: "Coordinator",
      salary: "50000",
    },
    {
      id: 3,
      name: "Bob Johnson",
      email: "-",
      department: "Accounting",
      position: "Accountant",
      salary: "5000",
    },
  ];
  return (
    <div className="container">
      <MainHeading title="Employee Management System">
        <Button>Add Employee</Button>
      </MainHeading>
      <MainTable
        attributeNames={attributeNames}
        columns={columns}
        items={employees}
      ></MainTable>
    </div>
  );
};

export default EmployeeListPage;
