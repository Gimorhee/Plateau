import React, { Fragment } from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";

import "../../css/navbar.css";

const Navibar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const guestUser = (
    <Fragment>
      <NavItem>
        <NavLink className="Nav-Item" href="/register">
          Register
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink className="Nav-Item" href="/login">
          Login
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink className="Nav-Item" href="/cart">
          My Cart
        </NavLink>
      </NavItem>
    </Fragment>
  );

  const authUser = (
    <Fragment>
      <NavItem>
        <NavLink className="Nav-Item">
          <a onClick={logout} href="/login" className="Nav-Logout">
            <i className="fas fa-sign-out-alt" />{" "}
            <span className="hide-sm">Logout</span>
          </a>
        </NavLink>
      </NavItem>

      <NavItem>
        <NavLink className="Nav-Item" href="/cart">
          My Cart
        </NavLink>
      </NavItem>
    </Fragment>
  );

  return (
    <Navbar className="Nav" light expand="md">
      <NavbarBrand className="Nav-Brand" href="/">
        Plateau
      </NavbarBrand>
      <Nav className="ml-auto" navbar>
        {!loading && (
          <Fragment>{isAuthenticated ? authUser : guestUser}</Fragment>
        )}
      </Nav>
    </Navbar>
  );
};

Navibar.propTypes = {
  auth: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logout }
)(Navibar);
