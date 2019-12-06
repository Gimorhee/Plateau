import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { setAlert } from "../../actions/alert";
import { completeOrder } from "../../actions/order";
import { clearMyCart } from "../../actions/myCart";
import { isNull } from "util";

const CompletePurchase = ({
  items,
  setAlert,
  completeOrder,
  payment: { info },
  delivery,
  clearMyCart
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
    let orderItems = items.map(item => item.name);
    const orderTotal = Number(totalPrice);
    const orderData = {
      orderItems,
      orderTotal
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
    }
  };

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
  delivery: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  payment: state.payment,
  delivery: state.delivery
});

export default connect(mapStateToProps, {
  setAlert,
  completeOrder,
  clearMyCart
})(CompletePurchase);
