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
          <div className="MyCart-Items">
            {items.items.map(item => (
              <div className="MyCart-Item">
                <div key={item._id}>
                  <img className="MyCart-Image" src={item.image} />
                </div>
                <div>
                  <div key={item._id}>
                    <h3>
                      <strong>{item.name}</strong>
                    </h3>
                  </div>
                  <div key={item._id}>
                    <h4>${item.price}</h4>
                  </div>
                  <div key={item._id}>
                    <h4>Type: {item.type}</h4>
                  </div>
                  <div key={item._id}>
                    <h4>Size: {item.size}</h4>
                  </div>
                  <div key={item._id}>
                    <h4>Quantity: {item.quantity}</h4>
                  </div>
                  <div className="MyCart-Customize">
                    <button className="MyCart-Like">
                      <i className="fas fa-heart"></i>
                    </button>
                    <select name="Item-Quantity" className="MyCart-Customize">
                      <option value="default">Quantity</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="Empty-Cart">
            <h2 className="Header">YOUR SHOPPING BAG IS EMPTY!</h2>
            <p className="Small-Font">
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
