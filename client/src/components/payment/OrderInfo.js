import React, { Fragment } from "react";

const OrderInfo = ({ items }) => {
  let orderValue = 0;
  items.map(item => (orderValue += item.price * item.quantity));

  const discountRate = orderValue >= 200 ? 0.1 : 0;
  const deliveryFee = orderValue >= 100 ? 0 : 7.99;
  const GSTHST = 0.05;
  const PST = 0.07;
  const discountPrice = Number(orderValue * discountRate).toFixed(2);
  const discountedPrice = orderValue - discountPrice;
  const priceAfterGSTPST = Number(discountedPrice * GSTHST).toFixed(2);
  const priceAfterPST = Number(discountedPrice * PST).toFixed(2);
  const totalPrice = (
    discountedPrice +
    Number(priceAfterGSTPST) +
    Number(priceAfterPST)
  ).toFixed(2);

  console.log(discountedPrice);

  return (
    <Fragment>
      <div className="Order-Container">
        <h2 className="Header">SHOPPING BAG TOTAL</h2>
        <div className="Checkout-Price">
          <p className="Small-Font">ORDER VALUE: </p>
          <p className="Small-Font">${orderValue}.00</p>
        </div>
        <div className="Checkout-Price">
          <p className="Small-Font">DISCOUNT: </p>
          <p className="Small-Font">${discountPrice}</p>
        </div>
        <div className="Checkout-Price">
          <p className="Small-Font">DELIVERY: </p>
          <p className="Small-Font">
            {deliveryFee === 0 ? "FREE" : "$" + deliveryFee}
          </p>
        </div>
        <div className="Checkout-Price">
          <p className="Small-Font">GST/HST: </p>
          <p className="Small-Font">${priceAfterGSTPST}</p>
        </div>
        <div className="Checkout-Price">
          <p className="Small-Font">PST: </p>
          <p className="Small-Font">${priceAfterPST} </p>
        </div>
        <div className="Checkout-Price">
          <p className="Small-Font">TOTAL: </p>
          <p className="Small-Font">${totalPrice}</p>
        </div>
        <p className="Small-Font">
          <strong>Customer Service</strong>
          <p className="Small-Font">
            Need help? Please contact <a href="#!">Customer Service.</a>
          </p>
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

export default OrderInfo;
