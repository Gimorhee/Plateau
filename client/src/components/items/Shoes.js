import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getTypeItems } from "../../actions/items";
import PropTypes from "prop-types";

const Shoes = ({ getTypeItems }) => {
  useEffect(() => {
    getTypeItems("shoes");
  }, []);

  return <div>Shoes</div>;
};

Shoes.propTypes = {
  items: PropTypes.object.isRequired,
  getTypeItems: PropTypes.func.isRequired
};

export default connect(
  null,
  { getTypeItems }
)(Shoes);
