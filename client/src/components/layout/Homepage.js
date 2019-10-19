import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getItems } from "../../actions/items";
import Carousel from "./Carousel";
import SubNav from "./SubNav";

import "../../css/homepage.css";

const Homepage = ({ getItems, items: { items } }) => {
  useEffect(() => {
    getItems();
  }, []);

  return (
    <Fragment>
      <SubNav />
      <Carousel items={items} />
    </Fragment>
  );
};

Homepage.propTypes = {
  items: PropTypes.object.isRequired,
  getItems: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  items: state.items
});

export default connect(
  mapStateToProps,
  { getItems }
)(Homepage);
