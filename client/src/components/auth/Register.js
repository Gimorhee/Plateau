import React, { useState, Fragment } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { setAlert } from "../../actions/alert";
import { register } from "../../actions/auth";

import "../../css/register.css";

const Register = ({ setAlert, register, auth: { isAuthenticated } }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    password2: ""
  });

  const { firstName, lastName, email, password, password2 } = formData;

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();

    if(password !== password2) {
      setAlert("Password must match, please try again!", "danger")
    } else {
      const newUser = {
        firstName,
        lastName,
        email,
        password
      }

      register(newUser);
    }
  }

  if (isAuthenticated) {
    return <Redirect to="/" />
  }

  return (
    <Fragment>
      <form className="form-signin" onSubmit={e => onSubmit(e)}>
        <h1 className="h1 mb-3 font-weight-normal">Sign Up</h1>
        <p className="p mb-3 font-weight-normal">Create Your Account</p>
        <input
          type="text"
          name="firstName"
          className="form-control"
          placeholder="First Name"
          value={firstName}
          onChange={e => onChange(e)}
          
          autoFocus
        />
        <input
          type="text"
          name="lastName"
          className="form-control"
          placeholder="Last Name"
          value={lastName}
          onChange={e => onChange(e)}
          
        />
        <input
          type="email"
          name="email"
          className="form-control"
          placeholder="Email address"
          value={email}
          onChange={e => onChange(e)}
          
        />
        <input
          type="password"
          name="password"
          className="form-control"
          placeholder="Password"
          value={password}
          onChange={e => onChange(e)}
          
        />
        <input
          type="password"
          name="password2"
          className="form-control"
          placeholder="Confirm Password"
          value={password2}
          onChange={e => onChange(e)}
          
        />
        <button className="btn btn-lg btn-dark btn-block" type="submit">
          Sign Up
        </button>
        <p className="my-1 Register-Footer">
          Already have an account? <Link to="/login">Sign In</Link>
        </p>
      </form>
    </Fragment>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps, { setAlert, register })(Register);
