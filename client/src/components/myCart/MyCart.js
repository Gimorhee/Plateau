import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getMyCartItems } from "../../actions/myCart";
import Spinner from "../layout/Spinner";
import Checkout from "./Checkout";

import "../../css/mycart.css";

const MyCart = ({ myCart: { items, loading }, getMyCartItems }) => {
  useEffect(() => {
    getMyCartItems();
  }, []);

  return loading || items.items === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <h1 className="MyCart-Header">SHOPPING BAG</h1>
      <div className="MyCart-Container">
        {items.items.length > 0 ? (
          <div>
            {items.items.map(item => (
              <div key={item._id}>{item.name}</div>
            ))}
          </div>
        ) : (
          <div className="Empty-Cart">
            <h2 className="Header">YOUR SHOPPING BAG IS EMPTY!</h2>
            <p className="Small">
              Checkout our new arrivals and add them in your shopping bag!
            </p>
            <a href="/" className="Back-Button">
              Back
            </a>
          </div>
        )}
        <Checkout />
      </div>
    </Fragment>
  );
};

MyCart.propTypes = {
  myCart: PropTypes.object.isRequired,
  getMyCartItems: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  myCart: state.myCart
});

export default connect(
  mapStateToProps,
  { getMyCartItems }
)(MyCart);
