import React, { useState } from "react";
import WithNoDeliveryInfoForm from "./WithNoDeliveryInfoForm";

const WithDeliveryInfoForm = ({ user, info }) => {
  const [editState, setEditState] = useState(false);

  const changeEditState = () => {
    setEditState(!editState);
  };

  return editState === false ? (
    <div className="WithDeliveryInfo">
      <h5>
        <strong>Delivery Type</strong>
      </h5>
      <h5>Standard Delivery (3-6 Business days, $5.99 or FREE if over $100)</h5>
      <h5>
        <strong>Shipping Address</strong>
      </h5>
      <h5>
        {user && user.firstName}, {info && info.address}, {info && info.city}, {info && info.province},{" "}
        {info && info.zip}
      </h5>
      <h5>
        <strong>Phone Number for delivery updates</strong>
      </h5>
      <h5>+1 {info && info.phone}</h5>
      <button className="Delivery-Button" onClick={() => changeEditState()}>
        EDIT
      </button>
    </div>
  ) : (
    <WithNoDeliveryInfoForm />
  );
};

export default WithDeliveryInfoForm;
