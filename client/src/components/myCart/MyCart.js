import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getMyCartItems } from "../../actions/myCart";
import { deleteItem } from "../../actions/myCart";
import Spinner from "../layout/Spinner";
import Checkout from "./Checkout";
import EmptyCart from "./EmptyCart";

import "../../css/mycart.css";

const MyCart = ({ myCart: { items, loading }, getMyCartItems, deleteItem }) => {
  useEffect(() => {
    getMyCartItems();
  }, [getMyCartItems]);

  return loading || items.items === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <h1 className="MyCart-Header">SHOPPING BAG</h1>
      <div className="MyCart-Container">
        {items.items ? (
          items.items.length > 0 ? (
            <div className="MyCart-Items">
              {items.items.map(item => (
                <div className="MyCart-Item">
                  <div>
                    <img className="MyCart-Image" src={item.image} alt="" />
                  </div>
                  <div className="MyCart-Item-Container">
                    <div>
                      <h3>
                        <strong>{item.name}</strong>
                      </h3>
                    </div>
                    <div>
                      <h4>${item.price}</h4>
                    </div>
                    <div>
                      <h4>Type: {item.type}</h4>
                    </div>
                    <div>
                      <h4>Size: {item.size}</h4>
                    </div>
                    <div className="MyCart-Customize">
                      <button className="MyCart-Like">
                        <i className="far fa-heart"></i>
                      </button>
                      <select name="Item-Quantity" className="MyCart-Quantity">
                        <option value="default">{item.quantity}</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                      </select>
                    </div>
                  </div>
                  <i className="fas fa-times" onClick={() => deleteItem(item._id)}></i>
                </div>
              ))}
            </div>
          ) : (
            <EmptyCart />
          )
        ) : (
          <EmptyCart />
        )}
        <Checkout items={items.items}/>
      </div>
    </Fragment>
  );
};

MyCart.propTypes = {
  myCart: PropTypes.object.isRequired,
  getMyCartItems: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  myCart: state.myCart
});

export default connect(
  mapStateToProps,
  { getMyCartItems, deleteItem }
)(MyCart);
