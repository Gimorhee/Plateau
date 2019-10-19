import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getTypeItems } from "../../actions/items";
import PropTypes from "prop-types";

const Shirts = ({ getTypeItems }) => {
  useEffect(() => {
    getTypeItems("shirts");
  }, []);

  return <div>Shirts</div>;
};

Shirts.propTypes = {
  items: PropTypes.object.isRequired,
  getItems: PropTypes.func.isRequired
};

export default connect(
  null,
  { getTypeItems }
)(Shirts);
