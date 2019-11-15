import React, { Fragment, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import { getItem } from "../../actions/items";
import { addToCart } from "../../actions/myCart";

import "../../css/item.css";

const Item = ({ match, addToCart, getItem, items: { loading, item } }) => {
  const [cartData, setCartData] = useState({
    name: "",
    price: null,
    size: null,
    type: "",
    image: "",
    quantity: null
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

    const formData = {
      name,
      price,
      size,
      type,
      image,
      quantity
    };

    addToCart(formData);
  };

  useEffect(() => {
    getItem(match.params.id);
  }, [getItem, match.params.id]);

  return loading || item === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <div className="Item-Container">
        <div className="Item-Detail">
          <img id="Item-Image" src={item.image} alt="" />
          <div className="Item-Info">
            <h1 className="Item-Name">{item.name}</h1>
            <h2 className="Item-Price">${item.price}</h2>
            <h2 className="Item-Type">
              {item.type[0].toUpperCase() + item.type.slice(1)}
            </h2>
            <h4>
              <h6>Description:</h6>
              <p> This is a mockup description. </p>
              <p>
                Padded parka in woven fabric with reflective details. Lined,
                drawstring hood with detachable faux fur trim and adjustable
                hook-loop tab at back. Zip and wind flap at front with snap
                fasteners. Fleece-lined handwarmer pockets, patch pockets with
                flap and hook-loop fastening, and one inner pocket. Inner
                ribbing and adjustable hook-loop tab at cuffs. Concealed
                drawstring at waist. Lined. Polyester fill.
              </p>
              <h6>Composition:</h6>
              <p>
                Polyester 84%, Cotton 16%Lining: Polyester 100%Faux fur: Acrylic
                43%, Modacrylic 42%, Polyester 15%
              </p>
              <table className="Item-Table table table-bordered">
                <tr>
                  <th>Size(cm)</th>
                  <th>Shoulder</th>
                  <th>Chest</th>
                  <th>Sleeve</th>
                  <th>Length</th>
                </tr>
                <tr>
                  <td>Free</td>
                  <td>50</td>
                  <td>58</td>
                  <td>60</td>
                  <td>75</td>
                </tr>
              </table>
              <div className="Item-Choice">
                <select className="Item-Size" onChange={e => changeSize(e)}>
                  <option value="default">Select your size</option>
                  <option value="XS">XS</option>
                  <option value="S">S</option>
                  <option value="M">M</option>
                  <option value="L">L</option>
                  <option value="XL">XL</option>
                </select>
                <select className="Item-Size" onChange={e => changeQuantity(e)}>
                  <option value="default">Select quantity</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
                <form onSubmit={e => onSubmit(e)}>
                  <button
                    className="Item-Button"
                    name={`${item.name},${item.price},${item.image},${item.type}`}
                    onMouseOver={e => onMouseOver(e)}
                  >
                    <i className="fas fa-shopping-cart" /> ADD TO CART
                  </button>
                </form>
              </div>
            </h4>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

Item.propTypes = {
  items: PropTypes.object.isRequired,
  getItem: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  items: state.items
});

export default connect(
  mapStateToProps,
  { getItem, addToCart }
)(Item);
