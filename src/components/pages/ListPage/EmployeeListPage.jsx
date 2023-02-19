import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./EmployeeListPage.css";
import MainHeading from "../../atoms/MainHeading/MainHeading";
import MainTable from "../../molecules/table/MainTable";

const EmployeeListPage = (props) => {
  const navigate = useNavigate();
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

  const onEdit = (index) => {
    //console.log("-----> edit clicked:", employees[index]);
    navigate("/add", { replace: true, state: { employee: employees[index] } });
  };

  return (
    <div className="container">
      <MainHeading title="Employee Management System">
        <Link className="link-style" to="/add">
          Add Employee
        </Link>
      </MainHeading>
      <MainTable
        attributeNames={attributeNames}
        columns={columns}
        items={employees}
        onEdit={onEdit}
      ></MainTable>
    </div>
  );
};

export default EmployeeListPage;
