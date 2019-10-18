import React, { Fragment } from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";

import "../../css/navbar.css";

const Navibar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const guestUser = (
    <Fragment>
      <a href="/register">Register</a>
      <a href="/login">Login</a>
      <a href="/cart">My Cart</a>
    </Fragment>
  );

  const authUser = (
    <Fragment>
      <a onClick={logout} href="/login" className="Nav-Logout">
        <span className="hide-sm">Logout</span>
      </a>
      <a href="/cart">My Cart</a>
    </Fragment>
  );

  return (
    <Fragment>
      <Navbar id="navbar" className="Nav" light expand="md">
        <NavbarBrand className="Nav-Brand" href="/">
          Plateau
        </NavbarBrand>
      </Navbar>
      <div className="Sub-Nav">
        {!loading && (
          <Fragment>{isAuthenticated ? authUser : guestUser}</Fragment>
        )}
      </div>
      <hr className="Nav-Underline" />
    </Fragment>
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
