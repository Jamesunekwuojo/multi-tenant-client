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
    const response = await axios.get("/api/tenants?adminId=${adminId}");
    setTenants(response.data);
  };

  const fetchDataUsage = async () => {
    const response = await axios.get("/api/data-usage");
    setDataUsage(response.data);
  };

  // const handleEdit = async (tenant) => {
  //   await axios.put(`/api/tenants/${tenant.id}`, tenant);
  //   fetchTenants();
  // };

  const handleDelete = async (id) => {
    await axios.delete(`/api/tenants/${id}`);
    fetchTenants();
  };

  return (
    <div className="flex min-h-screen bg-gray-100">


      {/* Main Content */}
      <div className="flex-1 flex flex-col p-6">
        <h1 className="text-3xl">Tenant Management Dashboard</h1>

        <SearchFilter onSearch={(term) => console.log(term)} />

        <TenantList
          tenants={tenants}
         
          onDelete={handleDelete}
        />

        {/* <TenantForm
          onSubmit={handleCreate}
     
        /> */}

        <TenantList
          tenants={tenants}
      
          onDelete={handleDelete}
        />
      </div>


    </div>
  );
}

export default Tenantpage;
