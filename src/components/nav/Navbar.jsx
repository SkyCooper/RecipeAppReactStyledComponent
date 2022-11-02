import React, { useState } from "react";
import Nav, { Brand, Hamburger, Menu, MenuLink } from "./Navbar.style";
import {GiHamburgerMenu} from "react-icons/gi";

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false)
  return (
    <Nav justify="space-between" wrap="wrap">
      <Brand to="/">
        <i>{"< @Cooper />"}</i>
        <span>Recipe</span>
      </Brand>

      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <GiHamburgerMenu />
      </Hamburger>

      <Menu isOpen={isOpen} onClick={() => setIsOpen(false)}>
        <MenuLink to="/">Home</MenuLink>
        <MenuLink to="about">About</MenuLink>
        <MenuLink to="register">Register</MenuLink>
        <MenuLink to="logout" onClick={()=>sessionStorage.clear()}>Logout</MenuLink>
      </Menu>
    </Nav>
  );
};

export default Navbar;
