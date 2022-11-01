import React from "react";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Nav className="p-5 d-flex justify-content-between w-100 mynavbar">
      <div>
        <a className="links" href="https://github.com/SkyCooper" target="_blank">
          Github
        </a>
      </div>
      <div>
        <NavLink className="links" to={"/login"}>
          Login
        </NavLink>
        <NavLink className="links" to={"/"}>
          Home
        </NavLink>
        <NavLink className="links" to={"/about"}>
          About
        </NavLink>
        <NavLink className="links" to={"/logout"}>
          Logout
        </NavLink>
      </div>
    </Nav>
  );
};

export default Navbar;
