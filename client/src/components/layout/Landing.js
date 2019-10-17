import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import "../../css/landing.css";

const Landing = ({ auth: { isAuthenticated } }) => {
  if (isAuthenticated) {
    return <Redirect to="/main" />;
  }

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

Landing.propTypes = {
  setAlert: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Landing);
