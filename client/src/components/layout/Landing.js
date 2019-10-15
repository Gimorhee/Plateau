import React from "react";
import { Link } from "react-router-dom";
import "../../css/landing.css";

const Landing = props => {
  return (
    <section className="Landing">
      <h1 className="Landing-Header">
        {" "}
        Become a member and get 10% off your purchase!{" "}
      </h1>
      <div className="Landing-Buttons">
        <button type="button" className="btn btn-outline-light">
          <a className="Landing-Register" href="/register">
            Register
          </a>
        </button>
        <button type="button" className="btn btn-light">
          <a className="Landing-Login" href="/login">
            Login
          </a>
        </button>
      </div>
    </section>
  );
};

export default Landing;
