
// import { updateTenant } from "../services/api";

// import Swal from "sweetalert2";

// import { useState } from "react";

// export default function UpdateForm() {
  
//   const [formData, setFormData] = useState({
//     name: "",
//     subdomain: "",
//     data: "",
//   });

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const result = await updateTenant(formData);

//       Swal.fire({
//         title: "Success",
//         text: result?.data?.message ||"Tenant created successfully",
//         icon: "success",
//         confirmButtonText: "Ok",
//       });

//       setFormData({
//         name: "",
//         subdomain: "",
//         data: "",
//       })
//     } catch (error) {
//       console.log(error);

//     }

  
//   };

//   const handleChange = async (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   return (
//     <div className="flex wrap min-h-screen flex-col items-center  bg-gray-100 p-4 mt-4">
//       <div className="w-full max-w-md bg-white rounded-xl shadow-md p-6">
//         <div className="space-y-1 mb-6">
//           <h2 className="text-2xl font-bold text-black">Update  Data </h2>
//           <p className="text-gray-600">Enter information</p>
//         </div>

//         <form className="space-y-4" onSubmit={handleSubmit}>
//           <div className="grid grid-cols-1 gap-4">
//             <div className="space-y-2">
//               <label htmlFor="firstName" className="block text-sm font-medium text-black">
//                 Tenant Name
//               </label>
//               <input
//                 name="name"
//                 onChange={handleChange}
//                 placeholder="John"
//                 className="w-full rounded-md border text-gray-700 border-gray-300 p-2 text-sm focus:border-blue-500 focus:outline-none"
//               />
//             </div>
//             <div className="space-y-2">
//               <label htmlFor="lastName" className="block text-sm font-medium text-black">
//                 Tenant Sub domain
//               </label>
//               <input
//                 name="subdomain"
//                 onChange={handleChange}
//                 placeholder="Doe"
//                 className="w-full rounded-md border border-gray-300 p-2 text-sm focus:border-blue-500 focus:outline-none text-gray-700"
//               />

//               <label className="block text-sm font-medium text-black">Tenant Data:</label>

//               <textarea
//                 className="w-full rounded-md border border-gray-300 p-2 text-sm focus:border-blue-500 focus:outline-none text-gray-700"
//                 placeholder="Enter tenant data"
//                 onChange={handleChange}
//                 name="data"
              
//               />
//             </div>
//           </div>

//           <button
//             type="submit"
//             className="w-full rounded-md bg-black py-2 text-white text-sm font-medium cursor-pointer hover:bg-black"
//           >
//             Update data
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

import { updateTenant } from "../services/api";
import Swal from "sweetalert2";
import { useState, useEffect } from "react";

export default function UpdateForm({ tenant, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    subdomain: "",
    data: "",
  });

  useEffect(() => {
    if (tenant) {
      setFormData({
        name: tenant.name,
        subdomain: tenant.subdomain,
        data: tenant.data,
      });
    }
  }, [tenant]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await updateTenant(tenant.id, formData);
      
      // Show success message
      Swal.fire({
        title: "Success",
        text: result?.data?.message || "Tenant updated successfully",
        icon: "success",
        confirmButtonText: "Ok",
      });
  
      // Update tenant state in the parent component
      onClose(formData);  // Pass the updated data back to TenantList
  
    } catch (error) {
      console.error("Error updating tenant:", error);
    }
  };
  

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const result = await updateTenant(tenant.id, formData);
  //     Swal.fire({
  //       title: "Success",
  //       text: result?.data?.message || "Tenant updated successfully",
  //       icon: "success",
  //       confirmButtonText: "Ok",
  //     });

  //    ;
  //     onClose();
  //   } catch (error) {
  //     console.error("Error updating tenant:", error);
  //   }
  // };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4 text-black">Update Tenant Data</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="space-y-2">
          <label className="block text-sm font-medium text-black">Tenant Name:</label>
          <input
            name="name"
            onChange={handleChange}
            placeholder="Tenant Name"
            className="w-full rounded-md border p-2 text-sm border-black text-gray-700 focus:border-blue-500 focus:outline-none"
          />
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-medium text-black">Tenant Subdomain:</label>
          <input
            name="subdomain"
          
            onChange={handleChange}
            placeholder="Subdomain"
            className="w-full rounded-md border p-2 text-sm border-black text-gray-700 focus:border-blue-500 focus:outline-none"
          />
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-medium text-black">Tenant Data:</label>
          <textarea
            name="data"
      
            onChange={handleChange}
            placeholder="Enter tenant data"
            className="w-full text-gray-700 rounded-md border p-2 text-sm border-black focus:border-blue-500 focus:outline-none"
            
          />
        </div>
        <div className="flex justify-between">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-md"
          >
            Update Data
          </button>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-gray-500 text-white rounded-md"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

