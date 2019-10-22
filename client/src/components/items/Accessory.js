import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getTypeItems } from "../../actions/items";
import PropTypes from "prop-types";

const Accessory = ({ getTypeItems }) => {
  useEffect(() => {
    getTypeItems("accessory");
  }, []);

  return <div>Accessory</div>;
};

Accessory.propTypes = {
  items: PropTypes.object.isRequired,
  getTypeItems: PropTypes.func.isRequired
};

export default connect(
  null,
  { getTypeItems }
)(Accessory);
