import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./EmployeeAddEditPage.css";
import MainHeading from "../../atoms/MainHeading/MainHeading";
import Input from "../../atoms/Input/Input";
import Select from "../../atoms/Select/Select";
import SubmitButton from "../../atoms/Button/SubmitButton";

const EmployeeAddEditPage = (props) => {
  const { state } = useLocation();
  const [employeeName, setEmployeeName] = useState();
  const [employeeDept, setEmployeeDept] = useState();
  const [employeePostiion, setEmployeePostiion] = useState();
  const [employeeSalary, setEmployeeSalary] = useState();
  useEffect(() => {
    console.log("state:", state);
    setEmployeeName(state?.employee?.name);
    setEmployeeDept(state?.employee?.department);
    setEmployeePostiion(state?.employee?.position);
    setEmployeeSalary(state?.employee?.salary);
  }, []);

  const onEmpNameChange = (value) => {
    setEmployeeName(value);
  };

  const onDepartmentChange = (value) => {
    setEmployeeDept(value);
  };

  const departments = [
    { value: "", name: "Select a department" },
    { value: "Marketing", name: "Marketing" },
    { value: "Human Resources", name: "Human Resources" },
    { value: "Accounting", name: "Accounting" },
  ];
  return (
    <div className="container">
      <MainHeading title="Employee Add page.">
        <Link className="link-style" to="/">
          Back
        </Link>
      </MainHeading>
      <form action="" method="post">
        <Input
          name="empName"
          displayLabel="Name"
          required={true}
          value={employeeName}
          onChange={onEmpNameChange}
        />
        <Select
          name="department"
          displayLabel="Department"
          required={false}
          values={departments}
          defaultValue={employeeDept ? employeeDept : null}
          onValueChange={onDepartmentChange}
        />
        <Input
          name="empPosition"
          displayLabel="Positon"
          required={false}
          value={employeePostiion}
        />
        <Input
          name="empSalary"
          displayLabel="Salary"
          required={false}
          type="number"
          value={employeeSalary}
        />
        <SubmitButton>Add Employee</SubmitButton>
      </form>
    </div>
  );
};

export default EmployeeAddEditPage;
