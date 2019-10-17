import React, { Fragment, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../../actions/auth";
import PropTypes from "prop-types";

import "../../css/register.css";

const Login = ({ login, auth: { isAuthenticated } }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const { email, password } = formData;

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();

    const user = {
      email,
      password
    };

    login(user);
  };

  if (isAuthenticated) {
    return <Redirect to="/main" />
  }

  return (
    <Fragment>
      <form className="form-signin" onSubmit={e => onSubmit(e)}>
        <h1 className="h1 mb-3 font-weight-normal">Sign In</h1>
        <p className="p mb-3 font-weight-normal">Sign in with Your Account</p>
        <input
          type="email"
          name="email"
          className="form-control"
          placeholder="Email address"
          value={email}
          onChange={e => onChange(e)}
          required
        />
        <input
          type="password"
          name="password"
          className="form-control"
          placeholder="Password"
          value={password}
          onChange={e => onChange(e)}
          required
        />
        <div className="checkbox mb-3"></div>
        <button className="btn btn-lg btn-dark btn-block" type="submit">
          Sign In
        </button>
        <p className="my-1">
          Don't have an account? <Link to="/register">Sign Up</Link>
        </p>
      </form>
    </Fragment>
  );
};

Login.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { login }
)(Login);
