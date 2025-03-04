import React from 'react';


const TenantDetails = ({ tenant }) => {
    return (
        <div className="tenant-details">
            <h2>{tenant.name}</h2>
            <p>Subdomain: {tenant.subdomain}</p>
            <p>Created At: {new Date(tenant.createdAt).toLocaleString()}</p>
        </div>
    );
};

export default TenantDetails;