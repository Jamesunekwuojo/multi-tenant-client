import  { useEffect, useState } from "react";
import axios from "axios";

const TenantList = ({ tenants, onEdit, onDelete }) => {
  return (
    <div className="tenant-list">
      <h2>Tenants</h2>
      <ul>
        {/* {tenants.map((tenant) => (
          <li key={tenant.id}>
            <span>{tenant.name}</span>
            <button onClick={() => onEdit(tenant)}>Edit</button>
            <button onClick={() => onDelete(tenant.id)}>Delete</button>
          </li>
        ))} */}
      </ul>
    </div>
  );
};

export default TenantList;
