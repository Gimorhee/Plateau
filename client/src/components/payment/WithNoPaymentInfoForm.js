import React, { useState, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addOrUpdatePaymentInfo } from "../../actions/payment";
import { setAlert } from "../../actions/alert";
import WithPaymentInfoForm from "./WithPaymentInfoForm";

const WithNoPaymentInfoForm = ({
  addOrUpdatePaymentInfo,
  payment: { info },
  setAlert
}) => {
  const [editState, setEditState] = useState(true);

  const [paymentInfo, setPaymentInfo] = useState({
    nameoncard: null,
    cardnumber: null,
    expmonth: null,
    expyear: null,
    cvv: null
  });

  const { nameoncard, cardnumber, expmonth, expyear, cvv } = paymentInfo;

  const formData = {
    nameoncard,
    cardnumber,
    expmonth,
    expyear,
    cvv
  };

  const addOrUpdate = () => {
    addOrUpdatePaymentInfo(formData);
  };

  const changeEditState = () => {
    if (
      nameoncard === null ||
      cardnumber === null ||
      expmonth === null ||
      expyear === null ||
      cvv === null
    ) {
      setAlert("Some of your payment informaiton is not provided", "danger");
    } else {
      setEditState(!editState);
    }
  };

  const onChange = e => {
    setPaymentInfo({
      ...paymentInfo,
      [e.target.name]: e.target.value
    });
  };

  return editState === true ? (
    <Fragment>
      <form className="Payment-Info-Form">
        <div className="col-md-12">
          <label className="Payment-Info-Label">
            <strong>Card Holder Name</strong>
          </label>
          <input
            type="text"
            name="nameoncard"
            className="form-control"
            placeholder="Your name on the card"
            onChange={e => onChange(e)}
          />
        </div>
        <div className="col-md-12">
          <label className="Payment-Info-Label">
            <strong>Card Number</strong>
          </label>
          <input
            type="text"
            name="cardnumber"
            className="form-control"
            placeholder="Your credit card number"
            onChange={e => onChange(e)}
          />
        </div>
        <div className="Payment-Extra-Info">
          <div className="col-md-2">
            <label className="Payment-Info-Label">
              <strong>Exp. Month</strong>
            </label>
            <input
              type="text"
              name="expmonth"
              className="form-control"
              placeholder="MM"
              onChange={e => onChange(e)}
            />
          </div>
          <div className="col-md-2">
            <label className="Payment-Info-Label">
              <strong>Exp. Year</strong>
            </label>
            <input
              type="text"
              name="expyear"
              className="form-control"
              placeholder="YYYY"
              onChange={e => onChange(e)}
            />
          </div>
          <div className="col-md-2">
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
        </div>
      </form>
      <div className="Payment-Button-Container">
        <button className="Delivery-Button" onClick={() => addOrUpdate()}>
          ADD/UPDATE
        </button>
        <button className="Delivery-Button" onClick={() => changeEditState()}>
          BACK TO PAYMENT
        </button>
      </div>
    </Fragment>
  ) : (
    <WithPaymentInfoForm info={paymentInfo} />
  );
};

WithNoPaymentInfoForm.propTypes = {
  addOrUpdatePaymentInfo: PropTypes.func.isRequired,
  payment: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  payment: state.payment
});

export default connect(mapStateToProps, { addOrUpdatePaymentInfo, setAlert })(
  WithNoPaymentInfoForm
);
