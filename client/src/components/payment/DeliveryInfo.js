import React, { Fragment } from "react";
import WithDeliveryInfo from "./WithDeliveryInfoForm";
import WithNoDeliveryInfo from "./WithNoDeliveryInfoForm";

import "../../css/payment.css";

const DeliveryInfo = ({ delivery: { info }, user }) => {
  return (
    <Fragment>
      <div className="Delivery-Container">
        <h3 className="Delivery-Header">DELIVERY</h3>
        {info === null ? (
            <WithNoDeliveryInfo />
        ) : (
            <WithDeliveryInfo user={user} info={info} />
        )}
      </div>
    </Fragment>
  );
};

export default DeliveryInfo;
