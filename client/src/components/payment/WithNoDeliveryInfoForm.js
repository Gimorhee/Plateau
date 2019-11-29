import React from "react";

const WithNoDeliveryInfoForm = props => {
  return (
    <div className="withNoDeliveryInfo">
      <form>
        <div className="form-group col-md-10">
          <input
            type="text"
            className="form-control"
            placeholder="Address:  #13 1234 18st"
          />
        </div>
        <div className="form-group col-md-10">
          <input
            type="text"
            className="form-control"
            placeholder="City: Vancouver"
          />
        </div>
        <div className="form-group col-md-10">
          <input
            type="text"
            className="form-control"
            placeholder="Province: British Columbia"
          />
        </div>
        <div className="form-group col-md-10">
          <input
            type="text"
            className="form-control"
            placeholder="ZIP: V7O 9X7"
          />
        </div>
        <div className="form-group col-md-10">
          <input
            type="text"
            className="form-control"
            placeholder="Phone Number: 123 456 7890"
          />
        </div>
      </form>
      <button className="Delivery-Button">CONTINUE TO PAYMENT</button>
    </div>
  );
};

export default WithNoDeliveryInfoForm;
