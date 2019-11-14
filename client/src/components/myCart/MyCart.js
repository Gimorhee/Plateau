import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getMyCartItems } from "../../actions/myCart";
import { deleteItem } from "../../actions/myCart";
import { changeItemQuantity } from "../../actions/myCart";
import { setAlert } from "../../actions/alert";
import Spinner from "../layout/Spinner";
import Checkout from "./Checkout";
import EmptyCart from "./EmptyCart";
import MyCartItem from "./MyCartItem";

import "../../css/mycart.css";

const MyCart = ({
  myCart: { items, loading },
  auth: { user },
  getMyCartItems,
  deleteItem,
  changeItemQuantity,
  setAlert
}) => {
  useEffect(() => {
    getMyCartItems();
  }, [getMyCartItems]);

  return loading || items.items === null ? (
    <Spinner />
  ) : (
    <Fragment>
      {/* TO-DO: when quantity is changed, change the total price */}
      <h1 className="MyCart-Header">SHOPPING BAG</h1>
      <div className="MyCart-Container">
        {items.items ? (
          items.items.length > 0 ? (
            <div className="MyCart-Items">
              {items.items.map(item => (
                <MyCartItem item={item} deleteItem={deleteItem} changeItemQuantity={changeItemQuantity} user={user}/>
              ))}
            </div>
          ) : (
            <EmptyCart />
          )
        ) : (
          <EmptyCart />
        )}
        <Checkout items={items.items} user={user} setAlert={setAlert} />
      </div>
    </Fragment>
  );
};

MyCart.propTypes = {
  myCart: PropTypes.object.isRequired,
  getMyCartItems: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
  changeItemQuantity: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  myCart: state.myCart,
  auth: state.auth
});

export default connect(mapStateToProps, {
  getMyCartItems,
  deleteItem,
  changeItemQuantity,
  setAlert
})(MyCart);
