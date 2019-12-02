import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const CompletePurchase = ({ items }) => {
    let orderValue = 0;
    items.map(item => (orderValue += item.price * item.quantity));
  
    const discountRate = orderValue >= 200 ? 0.1 : 0;
    const deliveryFee = orderValue >= 100 ? 0 : 7.99;
    const GSTHST = 0.05;
    const PST = 0.07;
    const discountPrice = Number(orderValue * discountRate).toFixed(2);
    const discountedPrice = orderValue - discountPrice;
    const priceAfterGSTPST = Number(discountedPrice * GSTHST).toFixed(2);
    const priceAfterPST = Number(discountedPrice * PST).toFixed(2);
    const totalPrice = (
      discountedPrice +
      Number(priceAfterGSTPST) +
      Number(priceAfterPST)
    ).toFixed(2);

    return (
        <Fragment>
        <div className="Purchase-Container">
            <p className="Purchase-Info"> With "Complete Purchase" you accept Plateau's <u>Terms & Conditions</u></p>
            <p className="Purchase-Info">To give you the full membership experience, we will process your personal data in accorance with the Plateau's <u>Privacy Notice.</u></p>
            <div className="Complete-Purchase-Container">
                <button className="Purchase-Button">COMPLETE PURCHASE ${totalPrice}</button>
            </div>
        </div>
        </Fragment>
    )
}

CompletePurchase.propTypes = {

}

export default CompletePurchase
