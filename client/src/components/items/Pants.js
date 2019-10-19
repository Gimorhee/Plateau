import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getTypeItems } from "../../actions/items";
import PropTypes from "prop-types";

const Pants = ({ getTypeItems }) => {
  useEffect(() => {
    getTypeItems("pants");
  }, []);

  return <div>Pants</div>;
};

Pants.propTypes = {
  items: PropTypes.object.isRequired,
  getItems: PropTypes.func.isRequired
};

export default connect(
  null,
  { getTypeItems }
)(Pants);
