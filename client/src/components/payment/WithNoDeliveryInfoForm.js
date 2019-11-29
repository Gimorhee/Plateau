import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addOrUpdateDeliveryInfo } from "../../actions/delivery";

const WithNoDeliveryInfoForm = ({ addOrUpdateDeliveryInfo, delivery: { info } }) => {
  const [deliveryInfo, setDeliveryInfo] = useState({
    address: null,
    city: null,
    province: null,
    zip: null,
    phone: null
  });

  const { address, city, province, zip, phone } = deliveryInfo;

  const formData = {
    address,
    city,
    province,
    zip,
    phone
  };

  const onClick = () => {
    addOrUpdateDeliveryInfo(formData);
  };

  const onChange = e => {
    setDeliveryInfo({ ...deliveryInfo, [e.target.name]: e.target.value });
  };

  const onChangeNumber = e => {
    setDeliveryInfo({ ...deliveryInfo, phone: Number(e.target.value) });
  };

  return (
    // TO-DO: Display existing delivery info
    <div className="withNoDeliveryInfo">
      <form className="DeliveryInfo-Form">
        <div className="col-md-10">
          <input
            type="text"
            name="address"
            className="form-control"
            placeholder="Address: #13 1234 18st"
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
      <button className="Delivery-Button" onClick={() => onClick()}>
        ADD/UPDATE DELIVERY INFO
      </button>
    </div>
  );
};

WithNoDeliveryInfoForm.propTypes = {
  addOrUpdateDeliveryInfo: PropTypes.func.isRequired,
  deliver: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  delivery: state.delivery
})

export default connect(mapStateToProps, { addOrUpdateDeliveryInfo })(
  WithNoDeliveryInfoForm
);
