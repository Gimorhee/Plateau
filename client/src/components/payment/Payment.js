import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getDeliveryInfo } from "../../actions/delivery";

import CustomerInfo from "./CustomerInfo";
import DeliveryInfo from "./DeliveryInfo";
import PaymentInfo from "./PaymentInfo";
import OrderInfo from "./OrderInfo";

import "../../css/payment.css";

const Payment = ({ auth: { user }, getDeliveryInfo, delivery }) => {
  useEffect(() => {
    getDeliveryInfo();
  }, [getDeliveryInfo]);

  return (
    <Fragment>
      <div className="Payment-Container">
        <div className="Customer-Container">
          <CustomerInfo user={user} />
          <DeliveryInfo delivery={delivery} />
          <PaymentInfo />
        </div>

        <div className="Order-Container">
          <OrderInfo />
        </div>
      </div>
    </Fragment>
  );
};

Payment.propTypes = {
  auth: PropTypes.object.isRequired,
  getDeliveryInfo: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  delivery: state.delivery
});

export default connect(mapStateToProps, { getDeliveryInfo })(Payment);
