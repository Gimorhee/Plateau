import React from "react";
import PropTypes from "prop-types";

import "../../css/mycart.css";

const Checkout = props => {
  return (
    <div className="Checkout-Container">
      <h2 className="Header">SHOPPING BAG TOTAL</h2>
      <div className="Checkout-Price">
        <p className="Small-Font">ORDER VALUE: </p>
        <p className="Small-Font">$0.00</p>
      </div>
      <div className="Checkout-Price">
        <p className="Small-Font">TOTAL: </p>
        <p className="Small-Font">$0.00*</p>
      </div>
      <p className="Small-Font"><strong>*Item prices excluded tax</strong></p>
      <button className="Checkout-Button">CONTINUE TO CHECKOUT</button>
      <p className="Small-Font Light-Color">
        Prices and shipping costs are not confirmed until you've reached
        checkout.
      </p>
      <p className="Small-Font Light-Color">30 days withdrawal. Read more about return and refund.</p>
      <br />
      <br />
      <div className="Shipping-Option">
        <p className="Small-Font"><strong>SHIPPING OPTIONS:</strong></p>
        <p className="Small-Font">PLATEAU MEMBER:</p>
        <p className="Small-Font">Free online return</p>
        <p className="Small-Font">Free Standard shipping over $75 / 3-6 business days.</p>
      </div>
    </div>
  );
};

Checkout.propTypes = {};

export default Checkout;
