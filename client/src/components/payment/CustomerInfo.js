import React from 'react'

const CustomerInfo = ({ user }) => {
    return (
        <div className="Info-Container">
            <h3 className="Info-Header"><strong>MY INFORMATION</strong></h3>
            <h5>Name: {user && user.firstName} </h5>
            <h5>Email: {user && user.email } </h5>
        </div>
    )
}

export default CustomerInfo
