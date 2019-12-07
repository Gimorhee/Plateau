import React, { Fragment, useEffect, useState } from "react";
import { connect } from "react-redux";
import { getTypeItems } from "../../actions/items";
import { addToCart } from "../../actions/myCart";
import PropTypes from "prop-types";
import SubNav from "../layout/SubNav.js";
import Spinner from "../layout/Spinner";

import "../../css/items.css";

const Pants = ({ getTypeItems, addToCart, items: { items, loading } }) => {
  const [cartData, setCartData] = useState({
    name: "",
    price: null,
    size: "XS",
    type: "",
    image: "",
    quantity: 1
  });

  const { name, price, size, type, image, quantity } = cartData;

  const onMouseOver = e => {
    const data = e.target.name;

    const newData = data.split(",");

    const name = newData[0];
    const price = Number(newData[1]);
    const image = newData[2];
    const type = newData[3];

    setCartData({ ...cartData, name, price, image, type });
  };

  const changeSize = e => {
    setCartData({ ...cartData, size: e.target.value });
  };

  const changeQuantity = e => {
    setCartData({ ...cartData, quantity: Number(e.target.value) });
  };

  const onSubmit = e => {
    e.preventDefault();

    const forData = {
      name,
      price,
      size,
      type,
      image,
      quantity
    };

    addToCart(forData);
  };

  useEffect(() => {
    getTypeItems("pants");
  }, [getTypeItems]);

  return loading || items === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <SubNav />
      <div className="Items-Container">
        {items.map(item => (
          <div key={item._id} className="Items-Item-Container">
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
              <div className="Selection-Container">
                <select
                  className="Selection-Quantity"
                  name="quantity"
                  onChange={e => changeQuantity(e)}
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
                <select
                  className="Selection-Size"
                  name="size"
                  onChange={e => changeSize(e)}
                >
                  <option value="XS">XS</option>
                  <option value="S">S</option>
                  <option value="M">M</option>
                  <option value="L">L</option>
                  <option value="XL">XL</option>
                </select>
              </div>
              <form onSubmit={e => onSubmit(e)}>
                <button
                  className="Items-Button"
                  href="/cart"
                  name={`${item.name},${item.price},${item.image},${item.type}`}
                  onMouseOver={e => onMouseOver(e)}
                >
                  Add
                </button>
              </form>
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

Pants.propTypes = {
  items: PropTypes.object.isRequired,
  getTypeItems: PropTypes.func.isRequired,
  addToCart: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  items: state.items
});

export default connect(
  mapStateToProps,
  { getTypeItems, addToCart }
)(Pants);
