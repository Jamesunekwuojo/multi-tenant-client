import axios from 'axios';

const api = axios.create({
  
    baseURL:import.meta.env.VITE_API_URL,
    headers: {
        'Content-Type': 'application/json',
     
    },

});

// Interceptor to dynamically add token only when it exists
api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

// Admin apis

export const userFetch =  () => api.get("/api/admin", {
    credentials: "include", // Include cookies for session-based auth
    withCredentials: true,
});


export const loginUser = (loginData) => api.post('/api/admin/login', loginData);


export const signupUser = (signupData) => api.post('/api/admin/signup', signupData);



// Tenant api

export const getTenants = () => api.get('/api/tenants');

export const createTenant = (tenant) => api.post('/api/tenants', tenant);

export const updateTenant = (id, tenant) => api.put(`/api/tenants/${id}`, tenant);

export const deleteTenant = (id) => api.delete(`/api/tenants/${id}`);

export const getDataUsage = () => api.get('/api/data-usage');

// Tenant Data API

export const getTenantData = (tenantId) => api.get(`/api/data?tenantId=${tenantId}`); // dat for all specific tenant

export const createTenantData = (data) => api.post('/api/data', data);

export const updateTenantData = (id, data) => api.put(`/api/data/${id}`, data);

export const deleteTenantData = (id) => api.delete(`/api/data/${id}`);

export default api;