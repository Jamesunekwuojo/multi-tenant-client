import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
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

// Sample tenant data
// const tenants = [
//   // {
//   //   id: "1",
//   //   name: "Acme Corporation",
//   //   industry: "Technology",
//   //   users: 156,
//   //   status: "active",
//   //   revenue: 45000,
//   //   growth: 12.5,
//   //   created: "2023-10-15",
//   //   location: "New York, USA",
//   //   contactEmail: "contact@acme.com",
//   //   contactPhone: "+1 (555) 123-4567",
//   //   description:
//   //     "Acme Corporation is a leading technology company specializing in cloud infrastructure and SaaS solutions for enterprise clients.",
//   //   monthlyData: [
//   //     { month: "Jan", users: 120, revenue: 38000 },
//   //     { month: "Feb", users: 125, revenue: 39500 },
//   //     { month: "Mar", users: 130, revenue: 40200 },
//   //     { month: "Apr", users: 135, revenue: 41000 },
//   //     { month: "May", users: 142, revenue: 42500 },
//   //     { month: "Jun", users: 148, revenue: 43800 },
//   //     { month: "Jul", users: 156, revenue: 45000 },
//   //   ],
//   // },
//   // {
//   //   id: "2",
//   //   name: "Globex Industries",
//   //   industry: "Manufacturing",
//   //   users: 89,
//   //   status: "active",
//   //   revenue: 32000,
//   //   growth: 8.2,
//   //   created: "2023-11-02",
//   //   location: "Chicago, USA",
//   //   contactEmail: "info@globex.com",
//   //   contactPhone: "+1 (555) 987-6543",
//   //   description:
//   //     "Globex Industries is a manufacturing company that produces high-quality components for the automotive and aerospace industries.",
//   //   monthlyData: [
//   //     { month: "Jan", users: 75, revenue: 28000 },
//   //     { month: "Feb", users: 78, revenue: 28500 },
//   //     { month: "Mar", users: 80, revenue: 29200 },
//   //     { month: "Apr", users: 82, revenue: 30000 },
//   //     { month: "May", users: 85, revenue: 30800 },
//   //     { month: "Jun", users: 87, revenue: 31500 },
//   //     { month: "Jul", users: 89, revenue: 32000 },
//   //   ],
//   // },
// ];

function Tenantpage() {
  const [tenants, setTenants] = useState([]);
  const [editingTenant, setEditingTenant] = useState(null);
  const [dataUsage, setDataUsage] = useState([]);

  useEffect(() => {
    fetchTenants();
    fetchDataUsage();
  }, []);


  const handleCreate = async (tenant) => {
    await axios.post('/api/tenants', tenant);
    fetchTenants();
};

  const fetchTenants = async () => {
    const response = await axios.get("/api/tenants");
    setTenants(response.data);
  };

  const fetchDataUsage = async () => {
    const response = await axios.get("/api/data-usage");
    setDataUsage(response.data);
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
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r">
        <div className="mt-4">
          <div className="space-y-1">
            <div className="px-4 py-2 text-sm font-medium text-gray-500">
              Overview
            </div>
            <Link
              href="/dashboard"
              className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
            >
              <Home className="h-4 w-4" />
              <span>Dashboard</span>
            </Link>
            <Link
              href="/dashboard/tenants"
              className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
            >
              <Building2 className="h-4 w-4" />
              <span>Tenants</span>
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
              href="/create-tenant"
              className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
            >
              <Plus className="h-4 w-4" />
              <span>Create Tenant</span>
            </Link>
            <Link
              href="/tenant-data"
              className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
            >
              <FileText className="h-4 w-4" />
              <span>Tenant Data Form</span>
            </Link>
            <Link
              href="/dashboard/settings"
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
      <div className="flex-1 flex flex-col p-6">
        <h1 className="text-3xl">Tenant Management Dashboard</h1>

        <SearchFilter onSearch={(term) => console.log(term)} />

        <TenantList
          tenants={tenants}
          onEdit={setEditingTenant}
          onDelete={handleDelete}
        />

        <TenantForm
          onSubmit={editingTenant ? handleEdit : handleCreate}
          initialData={editingTenant}
        />

        <TenantList
          tenants={tenants}
          onEdit={setEditingTenant}
          onDelete={handleDelete}
        />
      </div>

      {/* Main Content */}
      {/* <div className="flex-1">
        
        <main className="p-6">
          <div className="mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold tracking-tight">
                  {tenant.name}
                </h1>
                <p className="text-gray-500">
                  {tenant.industry} • {tenant.location}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span
                  className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                    tenant.status === "active"
                      ? "bg-green-100 text-green-800"
                      : "bg-yellow-100 text-yellow-800"
                  }`}
                >
                  {tenant.status === "active" ? "Active" : "Pending"}
                </span>
                <select
                  value={timeRange}
                  onChange={(e) => setTimeRange(e.target.value)}
                  className="px-4 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="7d">Last 7 days</option>
                  <option value="30d">Last 30 days</option>
                  <option value="90d">Last 90 days</option>
                  <option value="1y">Last year</option>
                </select>
              </div>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="bg-white rounded-lg shadow p-4">
              <div className="flex items-center justify-between">
                <h2 className="text-sm font-medium">Total Tenanats</h2>
                <Users className="h-4 w-4 text-gray-400" />
              </div>
              <div className="mt-2 text-2xl font-bold">{tenant.users}</div>
              <p className="text-xs text-gray-500">
                {tenant.monthlyData[tenant.monthlyData.length - 1].users -
                  tenant.monthlyData[tenant.monthlyData.length - 2].users >
                0
                  ? "+"
                  : ""}
                {tenant.monthlyData[tenant.monthlyData.length - 1].users -
                  tenant.monthlyData[tenant.monthlyData.length - 2].users}{" "}
                from last month
              </p>
            </div>
            <div className="bg-white rounded-lg shadow p-4">
              <div className="flex items-center justify-between">
                <h2 className="text-sm font-medium">Revenue</h2>
                <CreditCard className="h-4 w-4 text-gray-400" />
              </div>
              <div className="mt-2 text-2xl font-bold">
                ${tenant.revenue.toLocaleString()}
              </div>
              <p className="text-xs text-gray-500">
                {tenant.monthlyData[tenant.monthlyData.length - 1].revenue -
                  tenant.monthlyData[tenant.monthlyData.length - 2].revenue >
                0
                  ? "+"
                  : ""}
                $
                {(
                  tenant.monthlyData[tenant.monthlyData.length - 1].revenue -
                  tenant.monthlyData[tenant.monthlyData.length - 2].revenue
                ).toLocaleString()}{" "}
                from last month
              </p>
            </div>
            
          </div>

          <div className="mt-8">
       

           
          </div>
        </main>
      </div> */}
    </div>
  );
}

export default Tenantpage;
