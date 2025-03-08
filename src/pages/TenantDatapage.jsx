import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TenantDataForm from '../components/TenantDataForm';
import TenantDataList from '../components/TenantDataList';


const TenantDataPage = ({ tenantId }) => {
    const [tenantData, setTenantData] = useState([]);
    const [editingData, setEditingData] = useState(null);

    useEffect(() => {
        fetchTenantData();
    }, [tenantId]);

    const fetchTenantData = async () => {
        const response = await axios.get(`/api/data?tenantId=${tenantId}`);
        setTenantData(response.data);
    };

    const handleCreate = async (data) => {
        await axios.post('/api/data', { ...data, tenantId });
        fetchTenantData();
    };

    const handleUpdate = async (data) => {
        await axios.put(`/api/data/${data.id}`, data);
        fetchTenantData();
    };

    
    const handleDelete = async (id) => {
        await axios.delete(`/api/data/${id}`);
        fetchTenantData();
    };

    return (
        <div>
            <h1>Tenant Data Management</h1>
            <TenantDataForm
                onSubmit={editingData ? handleUpdate : handleCreate}
                initialData={editingData}
            />
            <TenantDataList
                data={tenantData}
                onEdit={setEditingData}
                onDelete={handleDelete}
            />
        </div>
    );
};

export default TenantDataPage;