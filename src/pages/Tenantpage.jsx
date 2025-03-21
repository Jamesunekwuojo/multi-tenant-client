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

function Tenantpage() {
  

  

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Main Content */}
      <div className="flex-1 flex flex-col p-6">
        <h1 className="text-3xl">Tenant Management Dashboard</h1>

        <SearchFilter onSearch={(term) => console.log(term)} />

        <TenantList />

      

     
      </div>
    </div>
  );
}

export default Tenantpage;
