import React, { Fragment } from "react";
import WithDeliveryInfo from "./WithDeliveryInfoForm";
import WithNoDeliveryInfo from "./WithNoDeliveryInfoForm";

import "../../css/payment.css";

const DeliveryInfo = ({ delivery: { info }, user }) => {
  return (
    <Fragment>
      <div className="Delivery-Container">
        <h3 className="Delivery-Header">DELIVERY INFORMATION</h3>
        {info === null ? (
            <WithNoDeliveryInfo info={info} />
        ) : (
            <WithDeliveryInfo user={user} info={info} />
        )}
      </div>
    </Fragment>
  );
};

export default DeliveryInfo;
