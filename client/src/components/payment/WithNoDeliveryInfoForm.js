import React, { useState, useEffect, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addOrUpdateDeliveryInfo } from "../../actions/delivery";
import { setAlert } from "../../actions/alert";
import WithDeliveryInfoForm from "./WithDeliveryInfoForm";

const WithNoDeliveryInfoForm = ({
  addOrUpdateDeliveryInfo,
  delivery: { info },
  auth: { user }, 
  setAlert
}) => {
  const [editState, setEditState] = useState(true);

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

  useEffect(() => {
    if (info) {
      setDeliveryInfo({
        ...deliveryInfo,
        address: info.address,
        city: info.city,
        province: info.province,
        zip: info.zip,
        phone: info.phone
      });
    }
  }, []);

  const changeEditState = () => {
    if (
      address === null ||
      city === null ||
      province === null ||
      zip === null ||
      phone === null
    ) {
      setAlert("Some of your delivery informaiton is not provided", "danger");
    } else {
      setEditState(!editState);
    }
  };

  const addOrUpdate = () => {
    addOrUpdateDeliveryInfo(formData);
  };

  const onChange = e => {
    setDeliveryInfo({ ...deliveryInfo, [e.target.name]: e.target.value });
  };

  const onChangeNumber = e => {
    setDeliveryInfo({ ...deliveryInfo, phone: e.target.value });
  };

  return editState === true ? (
    <Fragment>
      <form className="DeliveryInfo-Form">
        <div className="col-md-10 Delivery-Form-Container">
          <label className="form-label Delivery-Form-Label">
            <strong>Address</strong>
          </label>
          <input
            type="text"
            name="address"
            className="form-control"
            placeholder="#13 1234 18st"
            value={address}
            onChange={e => onChange(e)}
          />
        </div>
        <div className="col-md-10 Delivery-Form-Container">
          <label className="form-label Delivery-Form-Label">
            <strong>City</strong>
          </label>
          <input
            type="text"
            name="city"
            className="form-control"
            placeholder="Vancouver"
            value={city}
            onChange={e => onChange(e)}
          />
        </div>
        <div className="col-md-10 Delivery-Form-Container">
          <label className="form-label Delivery-Form-Label">
            <strong>Province</strong>
          </label>
          <input
            type="text"
            name="province"
            className="form-control"
            placeholder="British Columbia"
            value={province}
            onChange={e => onChange(e)}
          />
        </div>
        <div className="col-md-10 Delivery-Form-Container">
          <label className="form-label Delivery-Form-Label">
            <strong>ZIP</strong>
          </label>
          <input
            type="text"
            name="zip"
            className="form-control"
            placeholder="V7O 9X7"
            value={zip}
            onChange={e => onChange(e)}
          />
        </div>
        <div className="col-md-10 Delivery-Form-Container">
          <label className="form-label Delivery-Form-Label">
            <strong>Phone#</strong>
          </label>
          <input
            type="text"
            name="phone"
            className="form-control"
            placeholder="1234567890"
            value={phone}
            onChange={e => onChangeNumber(e)}
          />
        </div>
      </form>
      <div className="Delivery-Button-Container">
        <button className="Delivery-Button" onClick={() => addOrUpdate()}>
          ADD/UPDATE DELIVERY INFO
        </button>
        <button className="Delivery-Button" onClick={() => changeEditState()}>
          BACK TO PAYMENT
        </button>
      </div>
    </Fragment>
  ) : (
    <WithDeliveryInfoForm info={info} user={user} />
  );
};

WithNoDeliveryInfoForm.propTypes = {
  addOrUpdateDeliveryInfo: PropTypes.func.isRequired,
  delivery: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  delivery: state.delivery,
  auth: state.auth
});

export default connect(mapStateToProps, { addOrUpdateDeliveryInfo, setAlert })(
  WithNoDeliveryInfoForm
);
