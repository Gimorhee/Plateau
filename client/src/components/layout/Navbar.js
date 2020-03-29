import React, { Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";

import "../../css/navbar.css";

const Navibar = ({ auth: { isAuthenticated, loading, user }, logout }) => {
  const guestUser = (
    <Fragment>
      <a href="/register">Register</a>
      <a href="/login">Login</a>
    </Fragment>
  );

  const authUser = (
    <Fragment>
      <p> Welcome {user && user.firstName}😎</p>
      <a onClick={logout} href="/login" className="Nav-Logout">
        <i className="fas fa-sign-out-alt hide-icon"></i>
        <span className="hide-sm">Logout</span>
      </a>
      <a href={`/myCart/${user && user.firstName}`}>
        <i className="fas fa-shopping-cart hide-icon"></i>
        <span className="hide-sm">My Cart</span>
      </a>
    </Fragment>
  );

  return (
    <Fragment>
      <div className="Navbar">
        <a className="Nav-Brand" href="/">
          Plateau
        </a>
      </div>
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

export default connect(mapStateToProps, { logout })(Navibar);
