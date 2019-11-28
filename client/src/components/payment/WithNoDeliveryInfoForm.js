import React from "react";

const WithNoDeliveryInfoForm = props => {
  return (
    <div className="withNoDeliveryInfo">
      <form>
        <input type="text" placeholder="Shipping Address" />
        <input type="text" placeholder="City" />
        <input type="text" placeholder="ZIP" />
        <input type="text" placeholder="City" />
      </form>
      <button>CONTINUE TO PAYMENT</button>
    </div>
  );
};

export default WithNoDeliveryInfoForm;
