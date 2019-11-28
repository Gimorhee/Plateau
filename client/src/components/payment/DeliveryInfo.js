import React, { Fragment } from "react";
import WithDeliveryInfo from "./WithDeliveryInfoForm";
import WithNoDeliveryInfo from "./WithNoDeliveryInfoForm";

const DeliveryInfo = ({ delivery: { info }, user }) => {
  return (
    <Fragment>
      <div>
        <h3>DELIVERY</h3>
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
