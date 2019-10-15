import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import "../../css/navbar.css";

const Navibar = props => {
  return (
    <Navbar className="Nav" light expand="md">
      <NavbarBrand className="Nav-Brand" href="/">Plateau</NavbarBrand>
      <Nav className="ml-auto" navbar>
        <NavItem>
          <NavLink className="Nav-Item" href="/register">Register</NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="Nav-Item" href="/login">Login</NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default Navibar;
