import React, { Fragment } from 'react';

const OrderInfo = props => {
    return (
        <Fragment>
        <div className="Order-Container">
          <h2 className="Header">SHOPPING BAG TOTAL</h2>
          <div className="Checkout-Price">
            <p className="Small-Font">ORDER VALUE: </p>
            <p className="Small-Font">$0.00</p>
          </div>
          <div className="Checkout-Price">
            <p className="Small-Font">DISCOUNT: </p>
            <p className="Small-Font">$0.00</p>
          </div>
          <div className="Checkout-Price">
            <p className="Small-Font">DELIVERY: </p>
            <p className="Small-Font">$0.00</p>
          </div>
          <div className="Checkout-Price">
            <p className="Small-Font">GST/HST: </p>
            <p className="Small-Font">$0.00</p>
          </div>
          <div className="Checkout-Price">
            <p className="Small-Font">PST: </p>
            <p className="Small-Font">$0.00</p>
          </div>
          <div className="Checkout-Price">
            <p className="Small-Font">TOTAL: </p>
            <p className="Small-Font">$0.00</p>
          </div>
          <p className="Small-Font">
            <strong>Customer Service</strong>
            <p className="Small-Font">Need help? Please contact <a href="#!">Customer Service.</a></p>
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
    )
}

export default OrderInfo
