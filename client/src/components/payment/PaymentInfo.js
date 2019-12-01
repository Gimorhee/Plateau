import React, { Fragment } from 'react'

const PaymentInfo = props => {
    return (
        <Fragment>
            <div className="Payment-Info-Container">
                <h3 className="Payment-Info-Header">Payment Information</h3>
                <form className="Payment-Info-Form">
                    <div className="form-group col-md-12">
                        <label className="Payment-Info-Label"><strong>Card Holder Name</strong></label>
                        <input type="text" className="form-control" placeholder="Your name on the card"/>
                    </div>
                    <div className="form-group col-md-12">
                        <label className="Payment-Info-Label"><strong>Card Number</strong></label>
                        <input type="text" className="form-control" placeholder="Your credit card number"/>
                    </div>
                    <div className="Payment-Extra-Info">
                        <div className="form-group col-md-4">
                            <label className="Payment-Info-Label"><strong>Expiration Date</strong></label>
                            <input type="text" className="form-control" placeholder="MM/YYYY" />
                        </div>
                        <div className="form-group col-md-4">
                            <label className="Payment-Info-Label"><strong>CVV*</strong></label>
                            <input type="text" className="form-control" placeholder="" />
                        </div>
                        <button className="Delivery-Button">Make a Payment</button>
                    </div>
                </form>
            </div>
        </Fragment>
    )
}

export default PaymentInfo
