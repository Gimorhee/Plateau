import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import "../../css/alert.css";

const Alert = ({ alerts }) =>
  alerts !== null && alerts.length > 0 ? (
    alerts.map(alert => (
      <div key={alert.id} className={`alert alert-${alert.type}`}>
        {alert.message}
      </div>
    ))
  ) : (
    <div className="alert alert-danger hide-alert">test</div>
  );

Alert.propTypes = {
  alert: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  alerts: state.alert
});

export default connect(mapStateToProps)(Alert);
