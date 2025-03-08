

const TenantDetails = ({ tenant }) => {
    return (
        <div className="flex flex-items-center tenant-details">
            <h2>{tenant.name}</h2>
            <p>Subdomain: {tenant.subdomain}</p>
            <p>Created At: {new Date(tenant.createdAt).toLocaleString()}</p>
        </div>
    );
};

export default TenantDetails;