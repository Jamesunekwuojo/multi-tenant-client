import axios from 'axios';

const api = axios.create({
  
    baseURl:import.meta.env.VITE_API_URL,
    headers: {
        'Content-Type': 'application/json',
    },

});

export const getTenants = () => api.get('/api/tenants');
export const createTenant = (tenant) => api.post('/api/tenants', tenant);
export const updateTenant = (id, tenant) => api.put(`/api/tenants/${id}`, tenant);
export const deleteTenant = (id) => api.delete(`/api/tenants/${id}`);
export const getDataUsage = () => api.get('/api/data-usage');

export default api;