import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TenantList from '../components/TenantList.jsx';
import TenantForm from '../components/TenantForm.jsx';
import DataUsageChart from '../components/DataUsageChart.jsx';
import SearchFilter from '../components/SearchFilter.jsx';

const Dashboard = () => {
    const [tenants, setTenants] = useState([]);
    const [editingTenant, setEditingTenant] = useState(null);
    const [dataUsage, setDataUsage] = useState([]);

    useEffect(() => {
        fetchTenants();
        fetchDataUsage();
    }, []);

    const fetchTenants = async () => {
        const response = await axios.get('/api/tenants');
        setTenants(response.data);
    };

    const fetchDataUsage = async () => {
        const response = await axios.get('/api/data-usage');
        setDataUsage(response.data);
    };

    const handleCreate = async (tenant) => {
        await axios.post('/api/tenants', tenant);
        fetchTenants();
    };

    const handleEdit = async (tenant) => {
        await axios.put(`/api/tenants/${tenant.id}`, tenant);
        fetchTenants();
    };

    const handleDelete = async (id) => {
        await axios.delete(`/api/tenants/${id}`);
        fetchTenants();
    };

    return (
        <div className="dashboard">
            <h1>Tenant Management Dashboard</h1>
            <SearchFilter onSearch={(term) => console.log(term)} onFilter={(filter) => console.log(filter)} />
            <TenantForm onSubmit={editingTenant ? handleEdit : handleCreate} initialData={editingTenant} />
            <TenantList tenants={tenants} onEdit={setEditingTenant} onDelete={handleDelete} />
            <DataUsageChart data={dataUsage} />
        </div>
    );
};

export default Dashboard;