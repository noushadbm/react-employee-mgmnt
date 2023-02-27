import React, { useEffect, useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import "./EmployeeAddEditPage.css";
import MainHeading from "../../atoms/MainHeading/MainHeading";
import Input from "../../atoms/Input/Input";
import Select from "../../atoms/Select/Select";
import SubmitButton from "../../atoms/Button/SubmitButton";
import { getFormatedDate, convertDateToISO } from "../../common/Util";
import { DEPARTMENT_OPTIONS } from "../../common/Constants";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const EmployeeAddEditPage = (props) => {
  const departments = [
    { value: "", name: "Select Department" },
    ...DEPARTMENT_OPTIONS,
  ];

  const { state, pathname } = useLocation();
  const ref = useRef();
  const [employeeNumber, setEmployeeNumber] = useState();
  const [employeeName, setEmployeeName] = useState();
  const [employeeDept, setEmployeeDept] = useState();
  const [sal, setSal] = useState();

  const [resNumber, setResNumber] = useState();
  const [officeNumber, setOfficeNumber] = useState();
  const [intlNumber, setIntlNumber] = useState();
  const [dateOfJoining, setDateOfJoining] = useState(new Date());
  useEffect(() => {
    console.log("state:", state);
    setEmployeeName(state?.employee?.empName);
    setEmployeeNumber(state?.employee?.empNumber);
    setEmployeeDept(state?.employee?.department);
    let isoDate = convertDateToISO(state?.employee?.dateOfJoining);
    setDateOfJoining(isoDate ? new Date(isoDate) : new Date());
    setSal(state?.employee?.salary);
  }, []);

  const onEmpNumberChange = (value) => {
    setEmployeeNumber(value);
  };

  const onEmpNameChange = (value) => {
    setEmployeeName(value);
  };

  const onDepartmentChange = (value) => {
    setEmployeeDept(value);
  };

  const onSalChange = (val) => {
    setSal(val);
  };

  const onResNumberChange = (val) => {
    setResNumber(val);
  };

  const onOfficeNumberChange = (val) => {
    setOfficeNumber(val);
  };

  const onIntlNumberChange = (val) => {
    setIntlNumber(val);
  };

  const resetForm = () => {
    setEmployeeNumber("");
    setEmployeeName("");
    setEmployeeDept("");
    setDateOfJoining(new Date());
    setSal();
    setResNumber();
    setOfficeNumber();
    setIntlNumber();
  };

  const createEmployeeRecord = (e) => {
    e.preventDefault();

    const callCreateUserApi = async () => {
      const requestBody = {
        empName: employeeName,
        empNumber: +employeeNumber,
        dateOfJoining: getFormatedDate(dateOfJoining),
        department: employeeDept,
        salary: sal && +sal,
        contactInfos: [
          {
            contactType: "R",
            contactNumber: resNumber,
          },
          {
            contactType: "O",
            contactNumber: officeNumber,
          },
          {
            contactType: "I",
            contactNumber: intlNumber,
          },
        ],
      };
      // console.log("body:", requestBody);
      return await fetch("http://localhost:8080/api/v1/employees", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestBody),
      });
    };

    callCreateUserApi()
      .then((response) => {
        console.log("response.status:", response.status);
        if (response.status === 200) {
          resetForm();
          ref.current.reset();
          toast("Employee Record succesfully created!", { type: "success" });
        } else {
          response.text().then((text) => {
            const errorMsgBody = JSON.parse(text);
            console.log("response:", errorMsgBody.message);
            toast(errorMsgBody.message, { type: "error" });
          });
        }
      })
      .catch((error) => {
        console.log("Create user failure:", error);
      });
  };

  const prevLocation = pathname === "/edit" ? "/list" : "/";
  return (
    <div className="container">
      <MainHeading title="Employee Add page.">
        <Link className="link-style" to={prevLocation}>
          Back
        </Link>
      </MainHeading>
      <form onSubmit={createEmployeeRecord} ref={ref}>
        <Input
          name="empNumber"
          displayLabel="Emp Number"
          required={true}
          value={employeeNumber}
          type="number"
          onChange={onEmpNumberChange}
          maxLength={10}
        />
        <Input
          name="empName"
          displayLabel="Emp Name"
          required={true}
          value={employeeName}
          onChange={onEmpNameChange}
          pattern="[A-Za-z ]*"
          maxLength={100}
        />
        <label htmlFor="dateOfJoining">Date of joining</label>
        <DatePicker
          name="dateOfJoining"
          selected={dateOfJoining}
          onChange={(date) => setDateOfJoining(date)}
          dateFormat="dd-MM-yyyy"
          dateFormatCalendar="dd-MM-yyyy"
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
          maxLength={10}
        />

        <Input
          name="resPhoneNumber"
          displayLabel="Residence contact Number"
          required={false}
          value={resNumber}
          type="number"
          onChange={onResNumberChange}
          maxLength={20}
        />
        <Input
          name="officePhoneNumber"
          displayLabel="Office contact Number"
          required={false}
          value={officeNumber}
          type="number"
          onChange={onOfficeNumberChange}
          maxLength={20}
        />
        <Input
          name="intlPhoneNumber"
          displayLabel="International contact Number"
          required={false}
          value={intlNumber}
          type="number"
          onChange={onIntlNumberChange}
          maxLength={20}
        />
        <SubmitButton>Add Employee</SubmitButton>
      </form>
      <ToastContainer />
    </div>
  );
};

export default EmployeeAddEditPage;
