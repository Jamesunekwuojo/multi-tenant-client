import { Link } from "react-router-dom";
import { Building2 } from "lucide-react";

import { useState } from "react";

export default function TenantForm({onSubmit, adminId}) {
  const [name, setName] = useState( "");
  const [subdomain, setSubdomain] = useState( "");

  const handleSubmit = (e) => { 
    e.preventDefault();
    onSubmit({ name, subdomain, adminId})
  };

  return (
    <div className="flex wrap min-h-screen flex-col items-center  bg-gray-100 p-4">
   

      <div className="w-full max-w-md bg-white rounded-xl shadow-md p-6">
        <div className="space-y-1 mb-6">
          <h2 className="text-2xl font-bold">Add  New Tenant</h2>
          <p className="text-gray-600">Enter information of new tenant</p>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-4">
            <div className="space-y-2">
              <label htmlFor="firstName" className="block text-sm font-medium">
                Tenant Name
              </label>
              <input
                value={name}
                placeholder="John"
                className="w-full rounded-md border border-gray-300 p-2 text-sm focus:border-blue-500 focus:outline-none"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="lastName" className="block text-sm font-medium">
                Tenant Sub domain
              </label>
              <input
                value={subdomain}
                placeholder="Doe"
                className="w-full rounded-md border border-gray-300 p-2 text-sm focus:border-blue-500 focus:outline-none"
              />
            </div>
          </div>


          <button
            type="submit"
            className="w-full rounded-md bg-black py-2 text-white text-sm font-medium cursor-pointer hover:bg-black"
          >
            Add Tenant
          </button>
        </form>

  
      </div>
    </div>
  );
}
