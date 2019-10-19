import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getTypeItems } from "../../actions/items";
import PropTypes from "prop-types";

const Outer = ({ getTypeItems }) => {
  useEffect(() => {
    getTypeItems("outer");
  }, []);

  return <div>Outer</div>;
};

Outer.propTypes = {
  items: PropTypes.object.isRequired,
  getItems: PropTypes.func.isRequired
};

export default connect(
  null,
  { getTypeItems }
)(Outer);
