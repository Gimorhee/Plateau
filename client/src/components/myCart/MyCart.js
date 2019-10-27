import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getMyCartItems } from "../../actions/myCart";
import Spinner from "../layout/Spinner";

const MyCart = ({ myCart: {items, loading}, getMyCartItems }) => {
  useEffect(() => {
    getMyCartItems();
  }, []);

  return loading || items.items === null ? (
    <Spinner />
  ) : (<Fragment>
      {items.items.map(item => (
          <div key={item._id}>
              {item.name}
          </div>
      ))}
  </Fragment>)
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
