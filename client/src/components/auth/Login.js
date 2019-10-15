import React, { useState } from 'react'
import { Link } from "react-router-dom";
import "../../css/register.css";

const Login = props => {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
      });
    
      const { email, password } = formData;
    
      const onChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      return (
        <div>
          <form className="form-signin">
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
        </div>
      );
}


export default Login
