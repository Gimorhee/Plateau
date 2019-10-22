import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import { getItem } from "../../actions/items";

import "../../css/item.css";

const Item = ({ match, getItem, items: { loading, item } }) => {
  useEffect(() => {
    getItem(match.params.id);
  }, []);

  return loading || item === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <div className="Item-Container">
        <div className="Item-Detail">
          <img ClassName="Item-Image" src={item.image} alt="" />
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
                {/* TO-DO: ADD CAROUSEL OF OTHER ITEMS (SAME TYPE) */}
              </table>
              <div className="Item-Choice">
                <select name="Item-Size">
                  <option value="default">Select your size</option>
                  <option value="x-small">XS</option>
                  <option value="small">S</option>
                  <option value="medium">M</option>
                  <option value="large">L</option>
                  <option value="x-large">XL</option>
                </select>
                <button>
                  <i className="fas fa-shopping-cart" />{" "}
                  ADD TO CART
                </button>
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
  { getItem }
)(Item);
