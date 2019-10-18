import React, { Fragment } from "react";

import "../../css/landing.css";

const Landing = props => {
  return (
    <Fragment>
      <nav class="site-header sticky-top py-1">
        <div class="container d-flex flex-column flex-md-row justify-content-between">
          <a class="py-2 d-none d-md-inline-block" href="/outer">
            OUTER
          </a>
          <a class="py-2 d-none d-md-inline-block" href="/top">
            TOP
          </a>
          <a class="py-2 d-none d-md-inline-block" href="/shirts">
            SHIRTS
          </a>
          <a class="py-2 d-none d-md-inline-block" href="/pants">
            PANTS
          </a>
          <a class="py-2 d-none d-md-inline-block" href="/shoes">
            SHOES
          </a>
          <a class="py-2 d-none d-md-inline-block" href="/accessory">
            ACCESSORY
          </a>
        </div>
      </nav>
    </Fragment>
  );
};

export default Landing;
