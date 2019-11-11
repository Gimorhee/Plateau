import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getMyCartItems } from "../../actions/myCart";
import { deleteItem } from "../../actions/myCart";
import Spinner from "../layout/Spinner";
import Checkout from "./Checkout";
import EmptyCart from "./EmptyCart";
import MyCartItem from "./MyCartItem";

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
                <MyCartItem item={item} deleteItem={deleteItem} />
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
