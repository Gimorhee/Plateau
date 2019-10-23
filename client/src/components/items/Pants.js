import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { getTypeItems } from "../../actions/items";
import PropTypes from "prop-types";
import SubNav from "../layout/SubNav.js";
import Spinner from "../layout/Spinner";

import "../../css/items.css";

const Pants = ({ getTypeItems, items: { items, loading } }) => {
  useEffect(() => {
    getTypeItems("pants");
  }, []);

  return loading || items === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <SubNav />
      <div className="Items-Container">
        {items.map(item => (
          <div key={item._id}>
            <img className="Items-Image" src={item.image} alt="" />
            <div className="Items-Info">
              <div className="Items-Spec">
                <h2 className="Items-Name">{item.name}</h2>
                <p className="Items-Price">${item.price}</p>
              </div>
              <button className="Items-Button">
                <a className="Items-Link" href={`/items/${item._id}`}>Detail</a>
              </button>
              {/* TODO: My-Cart API / ROUTE / LOGIC / ACTION / REDUCER */}
              <button className="Items-Button" href="/cart">
                <a className="Items-Link" href="/cart">Add</a>
              </button>
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

Pants.propTypes = {
  items: PropTypes.object.isRequired,
  getTypeItems: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  items: state.items
});

export default connect(
  mapStateToProps,
  { getTypeItems }
)(Pants);
