import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getItems } from "../../actions/items";
import Carousel from "./Carousel";
import SubNav from "./SubNav";
import Spinner from "./Spinner";

import "../../css/homepage.css";

const Homepage = ({ getItems, items: { items, loading } }) => {
  useEffect(() => {
    getItems();
  }, []);

  return loading || items === null ? (
    <Spinner />
  ) : (
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
