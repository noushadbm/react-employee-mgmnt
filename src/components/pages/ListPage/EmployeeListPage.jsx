import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./EmployeeListPage.css";
import MainHeading from "../../atoms/MainHeading/MainHeading";
import MainTable from "../../molecules/table/MainTable";
import { DEPARTMENT_OPTIONS } from "../../common/Constants";
import { getNameForValue } from "../../common/Util";

const EmployeeListPage = (props) => {
  const navigate = useNavigate();
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      return await fetch("http://localhost:8080/api/v1/employees");
    };

    fetchData()
      .then((response) => response.json())
      .then((fetchedEmployees) => {
        const allEmployees = fetchedEmployees.map((fetchedEmployee) => {
          return {
            id: fetchedEmployee.id,
            empNumber: fetchedEmployee.empNumber,
            empName: fetchedEmployee.empName,
            dateOfJoining: fetchedEmployee.dateOfJoining,
            department: getNameForValue(
              fetchedEmployee.department,
              DEPARTMENT_OPTIONS
            ),
            salary: fetchedEmployee.salary,
          };
        });
        setEmployees(allEmployees);
      });
  }, []);

  const attributeNames = [
    "id",
    "empNumber",
    "empName",
    "dateOfJoining",
    "department",
    "salary",
  ];
  const columns = [
    "ID",
    "EMP No",
    "EMP Name",
    "Date of Joining",
    "Department",
    "Salary",
    "Actions",
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
        <Link className="link-style" to="/">
          Back
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
