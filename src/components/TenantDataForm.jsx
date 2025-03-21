import { useState } from "react";
import { createTenantData } from "../services/api.js";

const TenantDataForm = ({ onSubmit, tenantId }) => {
  const [data, setData] = useState( "");

  const handleSubmit = async(e) => {
    e.preventDefault();
    await createTenantData({ tenantId, data });
    setData("");
    onSubmit({ tenantId, data });
  };

  return (
    <div className="flex min-h flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-md p-6">

      <div className="space-y-1 mb-6">
        <h2 className="text-2xl font-bold">Add Tenant Data</h2>
        <p className="text-gray-600">Enter Data for Desired Tenant</p>
      </div>

      <form onSubmit={handleSubmit} className="tenant-data-form">
        <div className="grid grid-cols-1 gap-4">
          <div className="space-y-2">
            {/* <label htmlFor="data" className="block text-sm font-medium">
              Tenant Data
            </label> */}

         
          </div>
        </div>

        <button
          type="submit"
          className="my-2 w-full rounded-md bg-black py-2 text-white text-sm font-medium cursor-pointer hover:bg-black"
        >
         Create Data
        </button>
      </form>

      </div>

      
    </div>
  );
};

export default TenantDataForm;
