import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

const HomePage = (props) => {
  const [userRole, setUserRole] = useState([]);
  useEffect(() => {
    const fetchRoles = async () => {
      return await fetch("http://localhost:8080/api/v1/userRoles");
    };

    fetchRoles()
      .then((response) => response.json())
      .then((roles) => {
        console.log("---- roles:", roles);
        setUserRole(roles[0]);
      })
      .catch((error) => {
        console.log("Failed to fetch roles:", error);
      });
  }, []);
  return (
    <>
      <div className="container">
        <h1>Employee Management System</h1>
        {userRole.indexOf("USER") > 0 && (
          <div>
            <Link className="links" to="/add">
              Add New Employee
            </Link>
          </div>
        )}

        {userRole.indexOf("ADMIN") > 0 && (
          <>
            <div>
              <Link className="links" to="/list">
                View Employee List
              </Link>
            </div>
            <div>
              <Link className="links" to="/add">
                Add New Employee
              </Link>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default HomePage;
