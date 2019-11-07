import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getTypeItems } from "../../actions/items";
import PropTypes from "prop-types";
import Spinner from "../layout/Spinner";

const Shoes = ({ getTypeItems }) => {
  useEffect(() => {
    getTypeItems("shoes");
  }, []);

  return <Spinner />;
};

Shoes.propTypes = {
  items: PropTypes.object.isRequired,
  getTypeItems: PropTypes.func.isRequired
};

export default connect(
  null,
  { getTypeItems }
)(Shoes);
