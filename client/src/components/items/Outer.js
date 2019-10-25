import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { getTypeItems } from "../../actions/items";
import PropTypes from "prop-types";
import SubNav from "../layout/SubNav";
import Spinner from "../layout/Spinner";

import "../../css/items.css";

const Outer = ({ getTypeItems, items: { items, loading } }) => {
  useEffect(() => {
    getTypeItems("outer");
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
                <a className="Items-Link" href={`/items/${item._id}`}>
                Info
                </a>
              </button>
              {/* TODO: My-Cart API / ROUTE / LOGIC / ACTION / REDUCER */}
              <div className="Selection-Container">
                <select className="Selection-Quantity" name="quantity" id="">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
                <select className="Selection-Size" name="size" id="">
                  <option value="XS">XS</option>
                  <option value="S">S</option>
                  <option value="M">M</option>
                  <option value="L">L</option>
                  <option value="XL">XL</option>
                </select>
              </div>
              <button className="Items-Button" href="/cart">
                <a className="Items-Link" href="/cart">
                  Add
                </a>
              </button>
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

Outer.propTypes = {
  items: PropTypes.object.isRequired,
  getTypeItems: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  items: state.items
});

export default connect(
  mapStateToProps,
  { getTypeItems }
)(Outer);
