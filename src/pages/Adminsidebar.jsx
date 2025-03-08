import { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import axios from "axios";
import {
  ArrowLeft,
  BarChart3,
  Building2,
  ChevronDown,
  CreditCard,
  Download,
  FileText,
  Home,
  LineChart,
  LogOut,
  PieChart,
  Plus,
  Settings,
  Users,
} from "lucide-react";

import SearchFilter from "../components/SearchFilter";

import TenantForm from "../components/TenantForm";

import TenantList from "../components/TenantList";





function Adminsidebar() {
  const [tenants, setTenants] = useState([]);
  const [editingTenant, setEditingTenant] = useState(null);
//   const [dataUsage, setDataUsage] = useState([]);

//   useEffect(() => {
//     fetchTenants();
//     fetchDataUsage();
//   }, []);


//   const handleCreate = async (tenant) => {
//     await axios.post('/api/tenants', tenant);
//     fetchTenants();
// };

//   const fetchTenants = async () => {
//     const response = await axios.get("/api/tenants");
//     setTenants(response.data);
//   };

//   const fetchDataUsage = async () => {
//     const response = await axios.get("/api/data-usage");
//     setDataUsage(response.data);
//   };

//   const handleEdit = async (tenant) => {
//     await axios.put(`/api/tenants/${tenant.id}`, tenant);
//     fetchTenants();
//   };

//   const handleDelete = async (id) => {
//     await axios.delete(`/api/tenants/${id}`);
//     fetchTenants();
//   };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r">
        <div className="mt-4">
          <div className="space-y-1">
            <div className="px-4 py-2 text-sm font-medium text-gray-500">
              Overview
            </div>
            <Link
              to="/dashboard"
              className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
            >
              <Home className="h-4 w-4" />
              <span>Dashboard</span>
            </Link>

            <Link
              to="/dashboard/tenants"
              className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
            >
              <Building2 className="h-4 w-4" />
              <span>Tenants view</span>
            </Link>

            <Link
              to="/dashboard/data-page"
              className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
            >
              <FileText className="h-4 w-4" />
              <span>Tenants Data view</span>
            </Link>

            <Link
              href="/dashboard/tenant-analytics"
              className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
            >
              <BarChart3 className="h-4 w-4" />
              <span>Tenant Analytics</span>
            </Link>
          </div>
        </div>
        <div className="mt-4">
          <div className="px-4 py-2 text-sm font-medium text-gray-500">
            Management
          </div>
          <div className="space-y-1">
            <Link
              to="/dashboard/create-tenant"
              className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
            >
              <Plus className="h-4 w-4" />
              <span>Create Tenant</span>
            </Link>
            <Link
              to="/dashboard/tenant-data"
              className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
            >
              <FileText className="h-4 w-4" />
              <span>Tenant Data Form</span>
            </Link>
            <Link
       
              className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
            >
              <Settings className="h-4 w-4" />
              <span>Settings</span>
            </Link>
          </div>
        </div>
        <div className="mt-auto">
          <div className="flex items-center gap-2 px-4 py-2">
            <div className="h-6 w-6 rounded-full bg-gray-300"></div>
            <div className="flex flex-col">
              <span className="text-sm font-medium">John Doe</span>
              <span className="text-xs text-gray-500">Admin</span>
            </div>
            <ChevronDown className="ml-auto h-4 w-4" />
          </div>
          <Link
            href="/logout"
            className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
          >
            <LogOut className="h-4 w-4" />
            <span>Logout</span>
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <Outlet />
      </div>
     

   
    </div>
  );
}

export default Adminsidebar;
