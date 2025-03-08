import React from 'react';

const TenantDataList = ({ data, onEdit, onDelete }) => {
    return (
        <div className="tenant-data-list">
            <h2>Tenant Data</h2>
            <ul>
                {data.map((item) => (
                    <li key={item.id}>
                        <span>{item.data}</span>
                        <button onClick={() => onEdit(item)}>Edit</button>
                        <button onClick={() => onDelete(item.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TenantDataList;