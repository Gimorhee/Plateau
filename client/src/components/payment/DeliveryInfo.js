import React from 'react';

const DeliveryInfo = ({ delivery }) => {

    console.log("1", delivery);
    return (
        <div>
            <p>{delivery.info === null ? "No delivery info" : "Yes delivery info"}</p>
        </div>
    )
}

export default DeliveryInfo
