import React, { useState } from "react";
import WithNoPaymentInfoForm from "./WithNoPaymentInfoForm";

const WithPaymentInfoForm = ({ info }) => {
  const [editState, setEditState] = useState(false);

  const changeEditState = () => {
    setEditState(!editState);
  };

  return editState === false ? (
        <form className="Payment-Info-Form">
          <div className="form-group col-md-12">
            <label className="Payment-Info-Label">
              <strong>Card Holder Name</strong>
            </label>
            <input
              type="text"
              name="name"
              className="form-control"
              value={info.nameoncard}
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
              value={info.cardnumber}
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
                value={info.expmonth}
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
                value={info.expyear}
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
                value={info.cvv}
              />
            </div>
            <button className="Delivery-Button" onClick={() => changeEditState()}>
              EDIT CARD INFO
            </button>
          </div>
        </form>
  ) : (
      <WithNoPaymentInfoForm />
  )
};

export default WithPaymentInfoForm;
