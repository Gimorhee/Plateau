import React from 'react'

const CustomerInfo = ({ user }) => {
    return (
        <div className="Info-Container">
            <h3 className="Info-Header"><strong>MY INFORMATION</strong></h3>
            <h5><strong>Name:</strong> {user && user.firstName} {user && user.lastName} </h5>
            <h5><strong>Email:</strong> {user && user.email } </h5>
        </div>
    )
}

export default CustomerInfo
