import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../css/register.css";

const Register = props => {
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

  return (
    <div>
      <form className="form-signin">
        <h1 className="h1 mb-3 font-weight-normal">Sign Up</h1>
        <p className="p mb-3 font-weight-normal">Create Your Account</p>
        <input
          type="text"
          name="firstName"
          className="form-control"
          placeholder="First Name"
          value={firstName}
          onChange={e => onChange(e)}
          required
          autofocus
        />
        <input
          type="text"
          name="lastName"
          className="form-control"
          placeholder="Last Name"
          value={lastName}
          onChange={e => onChange(e)}
          required
        />
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
        <input
          type="password"
          name="password2"
          className="form-control"
          placeholder="Confirm Password"
          value={password2}
          onChange={e => onChange(e)}
          required
        />
        <div className="checkbox mb-3"></div>
        <button className="btn btn-lg btn-dark btn-block" type="submit">
          Sign Up
        </button>
        <p className="my-1">
          Already have an account? <Link to="/login">Sign In</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
