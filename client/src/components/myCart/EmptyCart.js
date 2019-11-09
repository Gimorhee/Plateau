import React from "react";

const EmptyCart = props => {
  return (
    <div className="Empty-Cart">
      <h2 className="Header">YOUR SHOPPING BAG IS EMPTY!</h2>
      <p className="Small-Font">
        Checkout our new arrivals and add them in your shopping bag!
      </p>
      <a href="/" className="Back-Button">
        Back
      </a>
    </div>
  );
};

export default EmptyCart;
