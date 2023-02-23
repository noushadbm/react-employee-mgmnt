import React, { useState } from "react";
import "./UserLoginPage.css";
import Input from "../../atoms/Input/Input";
import SubmitButton from "../../atoms/Button/SubmitButton";
import MainHeading from "../../atoms/MainHeading/MainHeading";

const UserLoginPage = () => {
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();

  const onUserNameChange = (value) => {
    setUserName(value);
  };

  const onPasswordChange = (value) => {
    setPassword(value);
  };

  const handleSubmit = (e) => {
    console.log("----:", userName, ":", password);
    e.preventDefault();
    fetch("http://localhost:8080/api/v1/user-login", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + "dXNlcjpwYXNzd29yZA==",
      },
      body: {},
    });
  };

  return (
    <div className="container">
      <MainHeading title="Login" />
      <form onSubmit={handleSubmit}>
        <Input
          name="username"
          displayLabel="Username"
          required={true}
          value={""}
          onChange={onUserNameChange}
        />
        <Input
          name="password"
          displayLabel="Password"
          required={true}
          value={""}
          onChange={onPasswordChange}
        />

        <SubmitButton>Login</SubmitButton>
      </form>
    </div>
  );
};

export default UserLoginPage;
