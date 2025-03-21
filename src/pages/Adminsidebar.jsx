import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  Building2,
  ChevronDown,
  CreditCard,
  FileText,
  Home,
  LogOut,
  Plus,
  Settings,
} from "lucide-react";

import { useAuth } from "../customHook/useAuth.jsx";

function Adminsidebar() {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  const {logout, user} = useAuth()

  const username = localStorage.getItem('username')



  const handleLogout = async() => {
    await logout()

  }

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className={`bg-white border-r transition-all duration-300 ${collapsed ? 'w-16' : 'w-64'}`}>
        <div className="mt-4">
          <div className="space-y-1">
            <div className={`px-4 py-2 text-sm font-medium text-gray-500 ${collapsed ? 'hidden' : ''}`}>
              Overview
            </div>
            <Link
              to="/dashboard"
              className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
            >
              <Home className="h-4 w-4" />
              <span className={`${collapsed ? 'hidden' : ''}`}>Dashboard</span>
            </Link>

            <Link
              to="/dashboard/tenants"
              className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
            >
              <Building2 className="h-4 w-4" />
              <span className={`${collapsed ? 'hidden' : ''}`}>Tenants  view</span>
            </Link>

            {/* <Link
              to="/dashboard/data-page"
              className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
            >
              <FileText className="h-4 w-4" />
              <span className={`${collapsed ? 'hidden' : ''}`}>Tenants Data view</span>
            </Link> */}

            <Link
              to="/dashboard/tenant-analytics"
              className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
            >
              <BarChart3 className="h-4 w-4" />
              <span className={`${collapsed ? 'hidden' : ''}`}>Tenant Analytics</span>
            </Link>
          </div>
        </div>
        <div className="mt-4">

          <div className={`px-4 py-2 text-sm font-medium text-gray-500 ${collapsed ? 'hidden' : ''}`}>
            Management
          </div>

          <div className="space-y-1">
            <Link
              to="/dashboard/create-tenant"
              className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
            >
              <Plus className="h-4 w-4" />
              <span className={`${collapsed ? 'hidden' : ''}`}>Create Tenant Data</span>
            </Link>
            {/* <Link
              to="/dashboard/tenant-data"
              className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
            >
              <FileText className="h-4 w-4" />
              <span className={`${collapsed ? 'hidden' : ''}`}>Tenant Data Form</span>
            </Link> */}

            
           

          </div>
          <div className={`px-4 py-2 text-sm font-medium text-gray-500 ${collapsed ? 'hidden' : ''}`}>
            Settings
          </div>

        </div>
        <div className="mt-auto">
          <div className="flex items-center gap-2 px-4 py-2">
            <div className="h-6 w-6 rounded-full bg-gray-300"></div>
            <div className={`flex flex-col ${collapsed ? 'hidden' : ''}`}>
              <span className="text-sm font-medium">{username}</span>
              <span className="text-xs text-gray-500">Tenant</span>
            </div>
            <ChevronDown className={`ml-auto h-4 w-4 ${collapsed ? 'hidden' : ''}`} />
          </div>
          <button>

          </button>

          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 cursor-pointer"
          >
            <LogOut className="h-4 w-4" />
            <span className={`${collapsed ? 'hidden' : ''}`}>Logout</span>
          </button>
          <button
            onClick={toggleSidebar}
            className="flex items-center
             justify-center  py-2 text-sm text-white
             bg-black hover:bg-black w-full cursor-pointer"
          >
            {collapsed ? <ArrowRight className="h-4 w-4" /> : <ArrowLeft className="h-4 w-4" />}
          </button>
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