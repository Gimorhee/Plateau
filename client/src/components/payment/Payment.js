import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getDeliveryInfo } from "../../actions/delivery";
import { getMyCartItems } from "../../actions/myCart";

import CustomerInfo from "./CustomerInfo";
import DeliveryInfo from "./DeliveryInfo";
import PaymentInfo from "./PaymentInfo";
import OrderInfo from "./OrderInfo";
import Spinner from "../layout/Spinner";

import "../../css/payment.css";

const Payment = ({
  auth: { user },
  getDeliveryInfo,
  getMyCartItems,
  delivery,
  myCart: { items, loading }
}) => {
  useEffect(() => {
    getDeliveryInfo();
    getMyCartItems();
  }, [getDeliveryInfo, getMyCartItems]);

  return loading || items.items === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <div className="Payment-Container">
        <div className="Customer-Container">
          <CustomerInfo user={user} />
          <DeliveryInfo delivery={delivery} user={user}/>
          <PaymentInfo />
        </div>

        <div className="Order-Container">
          <OrderInfo items={items.items} />
        </div>
      </div>
    </Fragment>
  );
};

Payment.propTypes = {
  auth: PropTypes.object.isRequired,
  getDeliveryInfo: PropTypes.func.isRequired,
  delivery: PropTypes.object.isRequired,
  myCart: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  delivery: state.delivery,
  myCart: state.myCart
});

export default connect(mapStateToProps, { getDeliveryInfo, getMyCartItems })(
  Payment
);
