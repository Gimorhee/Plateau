import React from "react";

const WithDeliveryInfoForm = ({ user, info }) => {
  return (
    <div className="withDeliveryInfo">
      <h5>
        <strong>Delivery Type</strong>
      </h5>
      <h5>Standard Delivery (3-6 Business days, $5.99 or FREE if over $100)</h5>
      <h5>
        <strong>Shipping Address</strong>
      </h5>
      <h5>
        {user.firstName}, {info.address}, {info.city}, {info.province}, {info.zip}
      </h5>
      <h5>
        <strong>Phone Number for delivery updates</strong>
      </h5>
      <h5>+1 {info.phone}</h5>
      <button className="Delivery-Button">EDIT</button>
    </div>
  );
};

export default WithDeliveryInfoForm;
