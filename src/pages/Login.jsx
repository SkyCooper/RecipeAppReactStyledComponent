import React from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";


const Login = ({ setUser }) => {
  const navigate = useNavigate();
  const handleclick = () => {
    setUser(true);
    navigate(-1);
  };
  return (
    <div className="wrapper">
      <Form className="info">
        <img
          className="m-auto"
          src={logo}
          alt="logo"
          style={{ width: "5rem", height: "auto" }}
        />
        <input type="text" name="" id="" placeholder="username" required />
        <input type="password" name="" id="" placeholder="password" required />
        <Button variant="warning" onClick={handleclick}>
          Login
        </Button>
      </Form>
    </div>
  );
};

export default Login;
