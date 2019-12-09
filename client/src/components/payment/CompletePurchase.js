import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { setAlert } from "../../actions/alert";
import { completeOrder } from "../../actions/order";
import { clearMyCart } from "../../actions/myCart";
import { sendConfirmationEmail } from "../../actions/order";

const CompletePurchase = ({
  items,
  setAlert,
  completeOrder,
  payment: { info },
  delivery,
  clearMyCart,
  myCart,
  sendConfirmationEmail,
  auth: { user }
}) => {
  let orderValue = 0;
  items !== undefined &&
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
    deliveryFee +
    Number(priceAfterGSTPST) +
    Number(priceAfterPST)
  ).toFixed(2);

  const completePurchase = () => {
    let orderItems = items !== undefined && items.map(item => item.name);
    const orderTotal = Number(totalPrice);
    const orderData = {
      orderItems,
      orderTotal
    };

    const orderSummary = myCart.items.items.map(item => (
      `
        <tr>
          <td>${item._id}</td>
          <td>${item.name}</td>
          <td>${item.size}</td>
          <td>${item.quantity}</td>
          <td>$${item.price}.00</td>
        </tr>
      `
    ))

    const msg = {
      to: `${user.email}`,
      from: "plateau@plateau-ca.com",
      subject: "[Order Confirmation Email] - Plateau",
      text: "Order Confirmation Email from Plateau.",
      html: 
      `  
        <div>
          <h1>YOUR ORDER IS PLACED SUCCESSFULLY!</h1>
          <h4>Thank you ${user.firstName} for shopping at Plateau!</h4>
          <p>You can track your order using the order tracking numbers listed below or log in to Plateau and view your shipped orders. Please note it will take up to 24 hours before tracking information is available.</p>
          
          <br>
          <h2>YOUR DETAILS</h2>
          <table style="width:50%">
              <tr>
                <td><strong>NAME:</strong> <br>${user.firstName} ${user.lastName}</td>
                <td><strong>EMAIL:</strong> <br>${user.email}</td>
                <td><strong>ORDER NUMBER:</strong> <br>${user._id}</td>
              </tr>
              <tr>
                <td><strong>SHIPPING ADDRESS:</strong> <br>${delivery.info.address} ${delivery.info.address}, ${delivery.info.city}, ${delivery.info.province} ${delivery.info.zip}</td>
                <td><strong>SHIPPING METHOD:</strong> <br>Standard Delivery</td>
                <td><strong>CONTACT NUMBER:</strong> <br>+1 ${delivery.info.phone}</td>
              </tr>
          </table>
          <br>
          <br>
          <h2>ORDER SUMMARY</h2>
          <table style="width:40%">
            <tr>
              <td><strong>ITEM. NO.</strong></td>
              <td><strong>DESCRIPTION</strong></td>
              <td><strong>SIZE</strong></td>
              <td><strong>QUANTITY</strong></td>
              <td><strong>PRICE</strong></td>
            </tr>
            ${orderSummary}
            <br>
            <tr>
              <td><strong>GST/HST</strong></td>
              <td><strong>PST</strong></td>
              <td><strong>DISCOUNTS</strong></td>
              <td><strong>DELIVERY</strong></td>
              <td><strong>TOTAL</strong></td>
            </tr>
            <tr>
              <td>$${priceAfterGSTPST}</td>
              <td>$${priceAfterPST}</td>
              <td>$${discountedPrice}.00</td>
              <td>$${deliveryFee}</td>
              <td>$${totalPrice}</td>
            </tr>
          </table>
        </div>
      `
    };

    if (delivery.info === null) {
      setAlert(
        "Please provide delivery information first to complete an order",
        "danger"
      );
    } else if (info === null) {
      setAlert(
        "Please provide payment credential first to complete an order",
        "danger"
      );
    } else {
      completeOrder(orderData);
      clearMyCart();
      sendConfirmationEmail(msg);
    }
  };

  if (myCart.items.length === 0) {
    return <Redirect to="/completedOrder" />;
  }

  return (
    <Fragment>
      <div className="Purchase-Container">
        <p className="Purchase-Info">
          {" "}
          With "Complete Purchase" you accept Plateau's{" "}
          <u>Terms & Conditions</u>
        </p>
        <p className="Purchase-Info">
          To give you the full membership experience, we will process your
          personal data in accorance with the Plateau's <u>Privacy Notice.</u>
        </p>
        <div className="Complete-Purchase-Container">
          <button
            className="Purchase-Button"
            onClick={() => completePurchase()}
          >
            COMPLETE PURCHASE ${totalPrice}
          </button>
        </div>
      </div>
    </Fragment>
  );
};

CompletePurchase.propTypes = {
  setAlert: PropTypes.func.isRequired,
  completeOrder: PropTypes.func.isRequired,
  clearMyCart: PropTypes.func.isRequired,
  payment: PropTypes.object.isRequired,
  delivery: PropTypes.object.isRequired,
  myCart: PropTypes.object.isRequired,
  sendConfirmationEmail: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  payment: state.payment,
  delivery: state.delivery,
  myCart: state.myCart,
  auth: state.auth
});

export default connect(mapStateToProps, {
  setAlert,
  completeOrder,
  clearMyCart,
  sendConfirmationEmail
})(CompletePurchase);
