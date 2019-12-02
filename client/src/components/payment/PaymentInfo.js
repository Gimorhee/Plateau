import React, { Fragment } from "react";
import { setAlert } from "../../actions/alert";
import { connect } from "react-redux";

import WithNoPaymentInfoForm from "./WithNoPaymentInfoForm";
import WithPaymentInfoForm from "./WithPaymentInfoForm";

const PaymentInfo = ({ setAlert, payment: { info }, user }) => {
  return (
    <Fragment>
      <div className="Payment-Info-Container">
        <h3 className="Payment-Info-Header">Payment Information</h3>
        { info === null ? (
          <WithNoPaymentInfoForm />
        ) : (
          <WithPaymentInfoForm info={info} />
        )}
      </div>
    </Fragment>
  );
};

export default connect(null, { setAlert })(PaymentInfo);
