import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getTypeItems } from "../../actions/items";
import PropTypes from "prop-types";

const Top = ({ getTypeItems }) => {
  useEffect(() => {
    getTypeItems("top");
  }, []);

  return <div>Top</div>;
};

Top.propTypes = {
  items: PropTypes.object.isRequired,
  getItems: PropTypes.func.isRequired
};

export default connect(
  null,
  { getTypeItems }
)(Top);
