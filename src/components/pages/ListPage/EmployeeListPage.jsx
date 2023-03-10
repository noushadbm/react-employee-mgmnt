import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./EmployeeListPage.css";
import MainHeading from "../../atoms/MainHeading/MainHeading";
import MainTable from "../../molecules/table/MainTable";
import { DEPARTMENT_OPTIONS } from "../../common/Constants";
import { getNameForValue } from "../../common/Util";
import { ToastContainer, toast } from "react-toastify";

const EmployeeListPage = (props) => {
  const navigate = useNavigate();
  const [originalEmployees, setOriginalEmployees] = useState([]);
  const [employees, setEmployees] = useState([]);

  const fetchData = async () => {
    return await fetch("http://localhost:8080/api/v1/employees");
  };

  const deleteData = async (employeeId) => {
    return await fetch("http://localhost:8080/api/v1/employees/" + employeeId, {
      method: "delete",
    });
  };

  useEffect(() => {
    fetchData()
      .then((response) => response.json())
      .then((fetchedEmployees) => {
        updateTable(fetchedEmployees, setEmployees, setOriginalEmployees);
      });
  }, []);

  const attributeNames = [
    "id",
    "empNumber",
    "empName",
    "dateOfJoining",
    "department",
    "salary",
    "contactInfos",
  ];
  const columns = [
    "ID",
    "EMP No",
    "EMP Name",
    "Date of Joining",
    "Department",
    "Salary",
    "Contact Numbers",
    "Actions",
  ];

  const onEdit = (index) => {
    navigate("/edit", {
      replace: true,
      state: { employee: originalEmployees[index] },
    });
  };

  const onDelete = (index) => {
    const employeeIdToDelete = employees[index]["id"];
    // Delete record and then fetch the updated list.
    deleteData(employeeIdToDelete).then(() => {
      toast("Employee record succesfully deleted!", { type: "success" });
      fetchData()
        .then((response) => response.json())
        .then((fetchedEmployees) => {
          updateTable(fetchedEmployees, setEmployees, setOriginalEmployees);
        });
    });
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
        onDelete={onDelete}
      ></MainTable>
      <ToastContainer />
    </div>
  );
};

export default EmployeeListPage;

function convertToKeyValues(contactInfos) {
  return contactInfos.map((item) => {
    return { key: item.contactType, value: item.contactNumber };
  });
}

function updateTable(fetchedEmployees, setEmployees, setOriginalEmployees) {
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
      contactInfos: convertToKeyValues(fetchedEmployee.contactInfos),
    };
  });
  setEmployees(allEmployees);

  const allOriginalEmployees = fetchedEmployees.map((fetchedEmployee) => {
    return {
      id: fetchedEmployee.id,
      empNumber: fetchedEmployee.empNumber,
      empName: fetchedEmployee.empName,
      dateOfJoining: fetchedEmployee.dateOfJoining,
      department: fetchedEmployee.department,
      salary: fetchedEmployee.salary,
      contactInfos: fetchedEmployee.contactInfos,
    };
  });
  setOriginalEmployees(allOriginalEmployees);
}
