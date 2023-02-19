import React from "react";
import "./EmployeeAddEditPage.css";
import MainHeading from "../../atoms/MainHeading/MainHeading";
import Input from "../../atoms/Input/Input";
import Select from "../../atoms/Select/Select";
import SubmitButton from "../../atoms/Button/SubmitButton";

const EmployeeAddEditPage = (props) => {
  const departments = [
    { value: "", name: "Select a department" },
    { value: "Marketing", name: "Marketing" },
    { value: "Human Resources", name: "Human Resources" },
    { value: "Accounting", name: "Accounting" },
  ];
  return (
    <div className="container">
      <MainHeading>Employee Add page.</MainHeading>
      <form action="" method="post">
        <Input name="empName" displayLabel="Name" required={true} />
        <Select
          name="department"
          displayLabel="Department"
          required={false}
          values={departments}
        />
        <Input name="empPosition" displayLabel="Positon" required={false} />
        <Input
          name="empSalary"
          displayLabel="Salary"
          required={false}
          type="number"
        />
        <SubmitButton>Add Employee</SubmitButton>
      </form>
    </div>
  );
};

export default EmployeeAddEditPage;
