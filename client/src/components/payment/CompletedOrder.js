import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import "../../css/completedOrder.css";

const CompletedOrder = ({ auth: { user } }) => {
return (
    <Fragment>
      <div className="CompletedOrder-Container">
        <h5 className="Confirmation-Header">
          Thank you ' {user && user.firstName} ' your order has been
          successfully placed!
        </h5>
        <p className="Confirmation-Info">You will receive a summary of your order via email shortly.</p>
        <h5 className="OrderNumber">Your Order #: {user && user._id}</h5>
        <a className="Continue-Link" href="/">
          Continue Shopping
        </a>
      </div>
    </Fragment>
  );
};

CompletedOrder.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(CompletedOrder);
