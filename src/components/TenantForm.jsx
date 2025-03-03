import React, { useState } from 'react';
import './styles/components/TenantForm.css';

const TenantForm = ({ onSubmit, initialData }) => {
    const [name, setName] = useState(initialData?.name || '');
    const [subdomain, setSubdomain] = useState(initialData?.subdomain || '');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ name, subdomain });
    };

    return (
        <form onSubmit={handleSubmit} className="tenant-form">
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Subdomain"
                value={subdomain}
                onChange={(e) => setSubdomain(e.target.value)}
                required
            />
            <button type="submit">{initialData ? 'Update' : 'Create'} Tenant</button>
        </form>
    );
};

export default TenantForm;