import React, { Fragment, useState } from "react";
import { setAlert } from "../../actions/alert";
import { connect } from "react-redux";

const PaymentInfo = ({ setAlert, payment: { info }, user }) => {
  const [paymentInfo, setPaymentInfo] = useState({
    name: "",
    number: "",
    month: "",
    year: "",
    cvv: ""
  });

  const { name, number, month, year, cvv } = paymentInfo;

  const onChange = e => {
    setPaymentInfo({
      ...paymentInfo,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Fragment>
      <div className="Payment-Info-Container">
        <h3 className="Payment-Info-Header">Payment Information</h3>
        <form className="Payment-Info-Form">
          <div className="form-group col-md-12">
            <label className="Payment-Info-Label">
              <strong>Card Holder Name</strong>
            </label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Your name on the card"
              onChange={e => onChange(e)}
            />
          </div>
          <div className="form-group col-md-12">
            <label className="Payment-Info-Label">
              <strong>Card Number</strong>
            </label>
            <input
              type="text"
              name="number"
              className="form-control"
              placeholder="Your credit card number"
              onChange={e => onChange(e)}
            />
          </div>
          <div className="Payment-Extra-Info">
            <div className="form-group col-md-2">
              <label className="Payment-Info-Label">
                <strong>Exp. Month</strong>
              </label>
              <input
                type="text"
                name="month"
                className="form-control"
                placeholder="MM"
                onChange={e => onChange(e)}
              />
            </div>
            <div className="form-group col-md-2">
              <label className="Payment-Info-Label">
                <strong>Exp. Year</strong>
              </label>
              <input
                type="text"
                name="year"
                className="form-control"
                placeholder="YYYY"
                onChange={e => onChange(e)}
              />
            </div>
            <div className="form-group col-md-2">
              <label className="Payment-Info-Label">
                <strong>CVV*</strong>
              </label>
              <input
                type="text"
                name="cvv"
                className="form-control"
                placeholder="###"
                onChange={e => onChange(e)}
              />
            </div>
            <button className="Delivery-Button">COMPLETE PURCHASE</button>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default connect(null, { setAlert })(PaymentInfo);
