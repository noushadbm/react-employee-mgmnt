import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./EmployeeAddEditPage.css";
import MainHeading from "../../atoms/MainHeading/MainHeading";
import Input from "../../atoms/Input/Input";
import Select from "../../atoms/Select/Select";
import SubmitButton from "../../atoms/Button/SubmitButton";
import { DEPARTMENT_OPTIONS } from "../../common/Constants";

const EmployeeAddEditPage = (props) => {
  const departments = [
    { value: "", name: "Select Department" },
    ...DEPARTMENT_OPTIONS,
  ];

  const { state } = useLocation();
  const [employeeNumber, setEmployeeNumber] = useState();
  const [employeeName, setEmployeeName] = useState();
  const [employeeDept, setEmployeeDept] = useState();
  const [employeeDateOfJoining, setEmployeeDateOfJoining] = useState();
  const [sal, setSal] = useState();
  useEffect(() => {
    console.log("state:", state);
    // setEmployeeName(state?.employee?.name);
    // setEmployeeDept(state?.employee?.department);
    // setEmployeeDateOfJoining(state?.employee?.position);
    // setEmployeeSalary(state?.employee?.salary);
  }, []);

  const onEmpNumberChange = (value) => {
    console.log('number change:', value);
    setEmployeeNumber(value);
  };

  const onEmpNameChange = (value) => {
    setEmployeeName(value);
  };

  const onDepartmentChange = (value) => {
    setEmployeeDept(value);
  };

  const onDateOfJoiningChange = (value) => {
    setEmployeeDateOfJoining(value);
  }

  const onSalChange = (val) => {
    console.log('Sal change:', val);
    setSal(val);
  }

  const createEmployeeRecord = (e) => {
    e.preventDefault();
    console.log("About to submit");

    const callCreateUserApi = async () => {
      // const obj = {};
      // obj['empName'] = employeeName;
      console.log("employeeName:", employeeName);
      console.log("employeeNumber:", employeeNumber);
      console.log("employeeDateOfJoining:", employeeDateOfJoining);
      console.log("employeeDept:", employeeDept);
      console.log("employeeSalary:", sal);

      const requestBody = {
        empName: employeeName,
        empNumber: +employeeNumber,
        dateOfJoining: employeeDateOfJoining,
        department: employeeDept,
        salary: sal && +sal,
      };
      console.log("body:", requestBody);
      return await fetch("http://localhost:8080/api/v1/employees", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestBody),
      });
    };

    callCreateUserApi()
      .then((response) => {
        console.log("response.status:", response.status);
      })
      .catch((error) => {
        console.log("Create user failure:", error);
      });
  };

  return (
    <div className="container">
      <MainHeading title="Employee Add page.">
        <Link className="link-style" to="/">
          Back
        </Link>
      </MainHeading>
      <form onSubmit={createEmployeeRecord}>
        <Input
          name="empNumber"
          displayLabel="Emp Number"
          required={true}
          value={employeeNumber}
          type="number"
          onChange={onEmpNumberChange}
        />
        <Input
          name="empName"
          displayLabel="Emp Name"
          required={true}
          value={employeeName}
          onChange={onEmpNameChange}
        />
        <Input
          name="dateOfJoining"
          displayLabel="Date of Joining (dd-MM-yyyy)"
          required={false}
          value={employeeDateOfJoining}
          onChange={onDateOfJoiningChange}
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
          name="salary"
          displayLabel="Emp Salary"
          required={true}
          value={sal}
          type="number"
          onChange={onSalChange}
        />
        <SubmitButton>Add Employee</SubmitButton>
      </form>
    </div>
  );
};

export default EmployeeAddEditPage;
