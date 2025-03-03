import React from 'react';
import TenantList from '../components/TenantList';
import TenantForm from '../components/TenantForm';

const Dashboard = () => (
    <div>
        <h1>Tenant Management Dashboard</h1>
        <TenantForm />
        <TenantList />
    </div>
);

export default Dashboard;