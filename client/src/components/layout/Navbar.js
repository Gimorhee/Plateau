import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";

const Navibar = props => {
  return (
    <Navbar color="light" light expand="md">
      <NavbarBrand href="/">Plateau</NavbarBrand>
      <Nav className="ml-auto" navbar>
        <NavItem>
          <NavLink href="/register">Register</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/login">Login</NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default Navibar;
