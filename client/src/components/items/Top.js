import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { getTypeItems } from "../../actions/items";
import PropTypes from "prop-types";
import SubNav from "../layout/SubNav.js";
import Spinner from "../layout/Spinner";

import "../../css/items.css";

const Top = ({ getTypeItems, items: { items, loading } }) => {
  useEffect(() => {
    getTypeItems("top");
  }, []);

  return loading || items === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <SubNav />
      <div className="Item-Container">
        {items.map(item => (
          <div key={item._id}>
            <img className="Item-Image" src={item.image} alt="" />
            <div className="Item-Info">
              <h2 className="Item-Name">{item.name}</h2>
              <p className="Item-Price">${item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

Top.propTypes = {
  items: PropTypes.object.isRequired,
  getItems: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  items: state.items
});

export default connect(
  mapStateToProps,
  { getTypeItems }
)(Top);
