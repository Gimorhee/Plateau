import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getDeliveryInfo } from "../../actions/delivery";
import { getMyCartItems } from "../../actions/myCart";
import { getPaymentInfo } from "../../actions/payment";

import CustomerInfo from "./CustomerInfo";
import DeliveryInfo from "./DeliveryInfo";
import PaymentInfo from "./PaymentInfo";
import OrderInfo from "./OrderInfo";
import CompletePurchase from "./CompletePurchase";
import Spinner from "../layout/Spinner";

import "../../css/payment.css";

const Payment = ({
  auth: { user },
  getDeliveryInfo,
  getMyCartItems,
  getPaymentInfo,
  delivery,
  payment,
  myCart: { items, loading }
}) => {
  useEffect(() => {
    getDeliveryInfo();
    getMyCartItems();
    getPaymentInfo();
  }, [getDeliveryInfo, getMyCartItems]);

  return loading || items.items === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <div className="Payment-Container">
        <div className="Customer-Container">
          <CustomerInfo user={user} />
          <DeliveryInfo delivery={delivery} user={user} />
          <PaymentInfo  payment={payment} user={user} />
          <CompletePurchase items={items.items}/>
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
  myCart: PropTypes.object.isRequired,
  payment: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  delivery: state.delivery,
  myCart: state.myCart,
  payment: state.payment
});

export default connect(mapStateToProps, {
  getDeliveryInfo,
  getMyCartItems,
  getPaymentInfo
})(Payment);
