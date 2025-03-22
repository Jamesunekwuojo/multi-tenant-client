import { Link } from "react-router-dom";
import { Building2 } from "lucide-react";
import { createTenant } from "../services/api";

import Swal from "sweetalert2";

import { useState } from "react";

export default function TenantForm() {
  // const [name, setName] = useState( "");
  // const [subdomain, setSubdomain] = useState( "");

  const [formData, setFormData] = useState({
    name: "",
    subdomain: "",
    data: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await createTenant(formData);

      Swal.fire({
        title: "Success",
        text: result?.data?.message ||"Tenant created successfully",
        icon: "success",
        confirmButtonText: "Ok",
      });

      setFormData({
        name: "",
        subdomain: "",
        data: "",
      })
    } catch (error) {
      console.log(error);

    }

  
  };

  const handleChange = async (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="flex wrap min-h-screen flex-col items-center  bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-md p-6">
        <div className="space-y-1 mb-6">
          <h2 className="text-2xl font-bold">Add  Data </h2>
          <p className="text-gray-600">Enter information</p>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-4">
            <div className="space-y-2">
              <label htmlFor="firstName" className="block text-sm font-medium">
                Tenant Name
              </label>
              <input
                name="name"
                onChange={handleChange}
                placeholder="John"
                className="w-full rounded-md border border-gray-300 p-2 text-sm focus:border-blue-500 focus:outline-none"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="lastName" className="block text-sm font-medium">
                Tenant Sub domain
              </label>
              <input
                name="subdomain"
                onChange={handleChange}
                placeholder="Doe"
                className="w-full rounded-md border border-gray-300 p-2 text-sm focus:border-blue-500 focus:outline-none"
              />

              <label className="block text-sm font-medium">Tenant Data:</label>

              <textarea
                className="w-full rounded-md border border-gray-300 p-2 text-sm focus:border-blue-500 focus:outline-none"
                placeholder="Enter tenant data"
                onChange={handleChange}
                name="data"
                required
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
