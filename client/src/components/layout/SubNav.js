import React, { Fragment } from "react";

const SubNav = props => {
  return (
    <Fragment>
      <nav className="site-header sticky-top py-1">
        <div className="container d-flex flex-column flex-md-row justify-content-between">
          <a className="py-2 d-none d-md-inline-block" href="/outer">
            OUTER
          </a>
          <a className="py-2 d-none d-md-inline-block" href="/top">
            TOP
          </a>
          <a className="py-2 d-none d-md-inline-block" href="/shirts">
            SHIRTS
          </a>
          <a className="py-2 d-none d-md-inline-block" href="/pants">
            PANTS
          </a>
          <a className="py-2 d-none d-md-inline-block" href="/shoes">
            SHOES
          </a>
          <a className="py-2 d-none d-md-inline-block" href="/accessory">
            ACCESSORY
          </a>
        </div>
      </nav>
      <br />
    </Fragment>
  );
};

export default SubNav;
