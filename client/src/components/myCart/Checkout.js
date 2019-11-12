import React, { Fragment, useState } from "react";
import { Redirect } from "react-router-dom";

import "../../css/mycart.css";

const Checkout = ({ items, user, setAlert }) => {
  const [status, setStatus] = useState({
    checkout: false
  });

  const { checkout } = status;

  let totalPrice = 0;
  items.map(item => (totalPrice += item.price));

  const deliveryFee = totalPrice >= 100 ? 0 : 7.99;

  const onClick = () => {
    setStatus({ ...status, checkout: true });
  };

  if(checkout && totalPrice !== 0) {
    return <Redirect to={`/payment/${user && user.firstName}`} />
  } else if(checkout && totalPrice === 0) {
    setAlert("You shopping bag is empty!", "danger");
  }

  return (
    <Fragment>
      <div className="Checkout-Container">
        <h2 className="Header">SHOPPING BAG TOTAL</h2>
        <div className="Checkout-Price">
          <p className="Small-Font">ORDER VALUE: </p>
          <p className="Small-Font">${totalPrice}.00</p>
        </div>
        <div className="Checkout-Price">
          <p className="Small-Font">DELIVERY: </p>
          <p className="Small-Font">${deliveryFee}</p>
        </div>
        <div className="Checkout-Price">
          <p className="Small-Font">TOTAL: </p>
          <p className="Small-Font">${totalPrice + deliveryFee}*</p>
        </div>
        <p className="Small-Font">
          <strong>*Item prices excluded tax</strong>
        </p>
        <button className="Checkout-Button" onClick={() => onClick()}>
          CONTINUE TO CHECKOUT
        </button>
        <p className="Small-Font Light-Color">
          Prices and shipping costs are not confirmed until you've reached
          checkout.
        </p>
        <p className="Small-Font Light-Color">
          30 days withdrawal. Read more about return and refund.
        </p>
        <br />
        <br />
        <div className="Shipping-Option">
          <p className="Small-Font">
            <strong>SHIPPING OPTIONS:</strong>
          </p>
          <p className="Small-Font">PLATEAU MEMBER:</p>
          <p className="Small-Font">Free online return</p>
          <p className="Small-Font">
            Free Standard shipping over $100 / 3-6 business days.
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default Checkout;
