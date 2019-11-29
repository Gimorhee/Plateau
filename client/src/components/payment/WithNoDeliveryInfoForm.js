import React, { useState } from "react";

const WithNoDeliveryInfoForm = ({}) => {
  const [deliveryInfo, setDeliveryInfo] = useState({
    address: null,
    city: null,
    province: null,
    zip: null,
    phone: null
  });

  const onChange = e => {
    setDeliveryInfo({ ...deliveryInfo, [e.target.name]: e.target.value });
  };

  const onChangeNumber = e => {
    setDeliveryInfo({ ...deliveryInfo, phone: Number(e.target.value) });
  };

  return (
    <div className="withNoDeliveryInfo">
      <form className="DeliveryInfo-Form">
        <div className="col-md-10">
          <input
            type="text"
            name="address"
            className="form-control"
            placeholder="Address:  #13 1234 18st"
            onChange={e => onChange(e)}
          />
        </div>
        <div className="col-md-10">
          <input
            type="text"
            name="city"
            className="form-control"
            placeholder="City: Vancouver"
            onChange={e => onChange(e)}
          />
        </div>
        <div className="col-md-10">
          <input
            type="text"
            name="province"
            className="form-control"
            placeholder="Province: British Columbia"
            onChange={e => onChange(e)}
          />
        </div>
        <div className="col-md-10">
          <input
            type="text"
            name="zip"
            className="form-control"
            placeholder="ZIP: V7O 9X7"
            onChange={e => onChange(e)}
          />
        </div>
        <div className="col-md-10">
          <input
            type="text"
            name="phone"
            className="form-control"
            placeholder="Phone Number: 1234567890"
            onChange={e => onChangeNumber(e)}
          />
        </div>
      </form>
      <button className="Delivery-Button">ADD DELIVERY INFO</button>
    </div>
  );
};

export default WithNoDeliveryInfoForm;
