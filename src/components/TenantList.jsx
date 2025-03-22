// // /* eslint-disable no-unused-vars */
// // import { useEffect, useState, useCallback } from "react";
// // import { getTenants, deleteTenant } from "../services/api";
// // import { Link } from "react-router-dom";

// // const TenantList = () => {
// //   const [tenants, setTenants] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [page, setPage] = useState(1);

// //   const fetchTenants = useCallback(async () => {
// //     setLoading(true);
// //     try {
// //       const response = await getTenants(page);
// //       const tenantsData = response?.data?.tenants || [];

// //       setTenants((prev) =>
// //         page === 1 ? tenantsData : [...prev, ...tenantsData]
// //       );

// //       console.log("Tenants fetched successfully,", tenantsData);
// //     } catch (error) {
// //       console.error("Error fetching tenants:", error);
// //     }
// //     setLoading(false);
// //   }, [page]);

// //   useEffect(() => {
// //     fetchTenants();
// //   }, [fetchTenants]);

// //   const handleEdit = (tenant) => {};

// //   const handleDelete = (id) => {
// //     deleteTenant(id)
// //       .then((response) => {
// //         console.log("Tenant deleted successfully", response.data);
// //         setTenants((prev) => prev.filter((tenant) => tenant.id !== id));
// //       })
// //       .catch((error) => {
// //         console.error("Error deleting tenant:", error);
// //       });
// //   };

// //   return (
// //     <div className="tenant-list">
// //       <ul>
// //         {tenants.map((tenant) => (
// //           <li key={tenant._id}>
// //             <span>{tenant.name}</span>

// //             <Link to="/dashboard/tenants/update-tenant">
// //               <button
// //                 className="cursor-pointer "
// //                 onClick={() => handleEdit(tenant)}
// //               >
// //                 Edit
// //               </button>
// //             </Link>

// //             <button
// //               className="cursor-pointer"
// //               onClick={() => handleDelete(tenant.id)}
// //             >
// //               Delete
// //             </button>

// //             <Link
// //               to={`/dashboard/tenants/${tenant.id}`}
// //               className="inline-block mt-2 text-orange-500 hover:underline"
// //             >
// //               <button>Show details</button>
// //             </Link>
// //           </li>
// //         ))}
// //       </ul>

// //       {loading && <p>Loading...</p>}

// //       <button onClick={() => setPage((prev) => prev + 1)} disabled={loading}>
// //         Load More
// //       </button>
// //     </div>
// //   );
// // };

// // export default TenantList;

// /* eslint-disable no-unused-vars */
// import { useEffect, useState, useCallback } from "react";
// import { getTenants, deleteTenant } from "../services/api";
// import { Link } from "react-router-dom";
// import { Pencil, Trash2, Info } from "lucide-react";

// const TenantList = () => {
//   const [tenants, setTenants] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [page, setPage] = useState(1);

//   const fetchTenants = useCallback(async () => {
//     setLoading(true);
//     try {
//       const response = await getTenants(page);
//       const tenantsData = response?.data?.tenants || [];

//       setTenants((prev) =>
//         page === 1 ? tenantsData : [...prev, ...tenantsData]
//       );

//       console.log("Tenants fetched successfully", tenantsData);
//     } catch (error) {
//       console.error("Error fetching tenants:", error);
//     }
//     setLoading(false);
//   }, [page]);

//   useEffect(() => {
//     fetchTenants();
//   }, [fetchTenants]);

//   const handleEdit = (tenant) => {};

//   const handleDelete = (id) => {
//     deleteTenant(id)
//       .then((response) => {
//         console.log("Tenant deleted successfully", response.data);
//         setTenants((prev) => prev.filter((tenant) => tenant.id !== id));
//       })
//       .catch((error) => {
//         console.error("Error deleting tenant:", error);
//       });
//   };

//   return (
//     <div className="max-w-4xl mx-auto p-4 bg-black text-white rounded-lg shadow-lg">
//       <h2 className="text-2xl font-semibold mb-4 text-center">Tenant List</h2>
//       <div className="space-y-4">
//         {tenants.map((tenant) => (
//           <div
//             key={tenant._id}
//             className="flex items-center justify-between bg-gray-900 p-4 rounded-lg shadow"
//           >
//             <div>
//               <p className="text-lg font-medium">{tenant.name}</p>
//             </div>
//             <div className="flex gap-4">
//               <button
               
        
//                 className="flex items-center gap-2 px-3 py-1.5 bg-blue-600 text-white rounded hover:bg-blue-700"
//               >
//                 <Pencil size={16} /> Edit
//               </button>
//               <button
//                 onClick={() => handleDelete(tenant.id)}
//                 className="flex items-center gap-2 px-3 py-1.5 bg-red-600 text-white rounded hover:bg-red-700"
//               >
//                 <Trash2 size={16} /> Delete
//               </button>
//               <Link
//                 to={`/dashboard/tenants/${tenant.id}`}
//                 className="flex items-center gap-2 px-3 py-1.5 bg-gray-700 text-white rounded hover:bg-gray-800"
//               >
//                 <Info size={16} /> Details
//               </Link>
//             </div>
//           </div>
//         ))}
//       </div>
//       {loading && <p className="text-center mt-4">Loading...</p>}
//       <div className="text-center mt-6">
//         <button
//           onClick={() => setPage((prev) => prev + 1)}
//           disabled={loading}
//           className="px-4 py-2 bg-white text-black rounded shadow hover:bg-gray-300 disabled:opacity-50"
//         >
//           Load More
//         </button>
//       </div>
//     </div>
//   );
// };

// export default TenantList;


// import { useEffect, useState, useCallback } from "react";
// import { getTenants, deleteTenant, updateTenant } from "../services/api";
// import { Link } from "react-router-dom";
// import { Pencil, Trash2, Info, X } from "lucide-react";



// import { useEffect, useState, useCallback } from "react";
// import { getTenants, deleteTenant } from "../services/api";
// import { Link } from "react-router-dom";
// import { Pencil, Trash2, Info } from "lucide-react";
// import UpdateForm from "./UpdateForm";

// const TenantList = () => {
//   const [tenants, setTenants] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [page, setPage] = useState(1);
//   const [selectedTenant, setSelectedTenant] = useState(null);

//   const fetchTenants = useCallback(async () => {
//     setLoading(true);
//     try {
//       const response = await getTenants(page);
//       const tenantsData = response?.data?.tenants || [];
//       setTenants((prev) =>
//         page === 1 ? tenantsData : [...prev, ...tenantsData]
//       );
//     } catch (error) {
//       console.error("Error fetching tenants:", error);
//     }
//     setLoading(false);
//   }, [page]);

//   useEffect(() => {
//     fetchTenants();
//   }, [fetchTenants]);

//   const handleEdit = (tenant) => {
//     setSelectedTenant(tenant);
//   };

//   const handleDelete = async (id) => {
//     try {
//       await deleteTenant(id);
//       setTenants((prev) => prev.filter((tenant) => tenant.id !== id));
//     } catch (error) {
//       console.error("Error deleting tenant:", error);
//     }
//   };

//   return (
//     <div className="max-w-4xl mx-auto p-4 bg-black text-white rounded-lg shadow-lg">
//       <h2 className="text-2xl font-semibold mb-4 text-center">Tenant List</h2>
//       <div className="space-y-4">
//         {tenants.map((tenant) => (
//           <div key={tenant._id} className="flex items-center justify-between bg-gray-900 p-4 rounded-lg shadow">
//             <div>
//               <p className="text-lg font-medium">{tenant.name}</p>
//             </div>
//             <div className="flex gap-4">
//               <button
//                 onClick={() => handleEdit(tenant)}
//                 className="flex items-center gap-2 px-3 py-1.5 bg-blue-600 text-white rounded hover:bg-blue-700"
//               >
//                 <Pencil size={16} /> Edit
//               </button>
//               <button
//                 onClick={() => handleDelete(tenant.id)}
//                 className="flex items-center gap-2 px-3 py-1.5 bg-red-600 text-white rounded hover:bg-red-700"
//               >
//                 <Trash2 size={16} /> Delete
//               </button>
//               <Link
//                 to={`/dashboard/tenants/${tenant.id}`}
//                 className="flex items-center gap-2 px-3 py-1.5 bg-gray-700 text-white rounded hover:bg-gray-800"
//               >
//                 <Info size={16} /> Details
//               </Link>
//             </div>
//           </div>
//         ))}
//       </div>

//       {loading && <p className="text-center mt-4">Loading...</p>}
//       <div className="text-center mt-6">
//         <button
//           onClick={() => setPage((prev) => prev + 1)}
//           disabled={loading}
//           className="px-4 py-2 bg-white text-black rounded shadow hover:bg-gray-300 disabled:opacity-50"
//         >
//           Load More
//         </button>
//       </div>

//       {/* Show Update Form when a tenant is selected */}
//       {selectedTenant && (
//         <UpdateForm tenant={selectedTenant} onClose={() => setSelectedTenant(null)} />
//       )}
//     </div>
//   );
// };

// export default TenantList;


// const TenantList = () => {
//   const [tenants, setTenants] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [page, setPage] = useState(1);
//   const [editingTenant, setEditingTenant] = useState(null);
//   const [updatedName, setUpdatedName] = useState("");

//   const fetchTenants = useCallback(async () => {
//     setLoading(true);
//     try {
//       const response = await getTenants(page);
//       const tenantsData = response?.data?.tenants || [];

//       setTenants((prev) =>
//         page === 1 ? tenantsData : [...prev, ...tenantsData]
//       );
//     } catch (error) {
//       console.error("Error fetching tenants:", error);
//     }
//     setLoading(false);
//   }, [page]);

//   useEffect(() => {
//     fetchTenants();
//   }, [fetchTenants]);

//   const handleEdit = (tenant) => {
//     setEditingTenant(tenant);
//     setUpdatedName(tenant.name);
//   };

//   const handleUpdate = async () => {
//     if (!editingTenant) return;
//     try {
//       await updateTenant(editingTenant.id, { name: updatedName });
//       setTenants((prev) =>
//         prev.map((t) => (t.id === editingTenant.id ? { ...t, name: updatedName } : t))
//       );
//       setEditingTenant(null);
//     } catch (error) {
//       console.error("Error updating tenant:", error);
//     }
//   };

//   const handleDelete = (id) => {
//     deleteTenant(id)
//       .then(() => {
//         setTenants((prev) => prev.filter((tenant) => tenant.id !== id));
//       })
//       .catch((error) => console.error("Error deleting tenant:", error));
//   };

//   return (
//     <div className="max-w-4xl mx-auto p-4 bg-black text-white rounded-lg shadow-lg">
//       <h2 className="text-2xl font-semibold mb-4 text-center">Tenant List</h2>
//       <div className="space-y-4">
//         {tenants.map((tenant) => (
//           <div
//             key={tenant._id}
//             className="flex items-center justify-between bg-gray-900 p-4 rounded-lg shadow"
//           >
//             <div>
//               <p className="text-lg font-medium">{tenant.name}</p>
//             </div>
//             <div className="flex gap-4">
//               <button
//                 onClick={() => handleEdit(tenant)}
//                 className="flex items-center gap-2 px-3 py-1.5 bg-blue-600 text-white rounded hover:bg-blue-700"
//               >
//                 <Pencil size={16} /> Edit
//               </button>
//               <button
//                 onClick={() => handleDelete(tenant.id)}
//                 className="flex items-center gap-2 px-3 py-1.5 bg-red-600 text-white rounded hover:bg-red-700"
//               >
//                 <Trash2 size={16} /> Delete
//               </button>
//               <Link
//                 to={`/dashboard/tenants/${tenant.id}`}
//                 className="flex items-center gap-2 px-3 py-1.5 bg-gray-700 text-white rounded hover:bg-gray-800"
//               >
//                 <Info size={16} /> Details
//               </Link>
//             </div>
//           </div>
//         ))}
//       </div>
//       {loading && <p className="text-center mt-4">Loading...</p>}
//       <div className="text-center mt-6">
//         <button
//           onClick={() => setPage((prev) => prev + 1)}
//           disabled={loading}
//           className="px-4 py-2 bg-white text-black rounded shadow hover:bg-gray-300 disabled:opacity-50"
//         >
//           Load More
//         </button>
//       </div>

//       {/* Edit Tenant Modal */}
//       {editingTenant && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//           <div className="bg-white p-6 rounded-lg shadow-lg text-black w-96">
//             <div className="flex justify-between items-center mb-4">
//               <h3 className="text-xl font-semibold">Edit Tenant</h3>
//               <button onClick={() => setEditingTenant(null)}>
//                 <X size={20} />
//               </button>
//             </div>
//             <input
//               type="text"
//               className="w-full p-2 border rounded"
//               value={updatedName}
//               onChange={(e) => setUpdatedName(e.target.value)}
//             />
//             <div className="flex justify-end gap-2 mt-4">
//               <button
//                 onClick={handleUpdate}
//                 className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
//               >
//                 Save
//               </button>
//               <button
//                 onClick={() => setEditingTenant(null)}
//                 className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500"
//               >
//                 Cancel
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default TenantList;




import { useEffect, useState, useCallback } from "react";
import { getTenants, deleteTenant } from "../services/api";
import { Link } from "react-router-dom";
import { Pencil, Trash2, Info } from "lucide-react";
import UpdateForm from "./UpdateForm";

const TenantList = () => {
  const [tenants, setTenants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [selectedTenant, setSelectedTenant] = useState(null);

  const fetchTenants = useCallback(async () => {
    setLoading(true);
    try {
      const response = await getTenants(page);
      const tenantsData = response?.data?.tenants || [];

      setTenants((prev) =>
        page === 1 ? tenantsData : [...prev, ...tenantsData]
      );
    } catch (error) {
      console.error("Error fetching tenants:", error);
    }
    setLoading(false);
  }, [page]);

  useEffect(() => {
    fetchTenants();
  }, [fetchTenants]);

  const handleEdit = (tenant) => {
    setSelectedTenant(tenant); // Open modal with tenant data
  };

  // const handleCloseModal = () => {
  //   setSelectedTenant(null); // Close modal
  // };

  const handleCloseModal = (updatedTenant) => {
    if (updatedTenant) {
      setTenants((prev) =>
        prev.map((t) => (t.id === selectedTenant.id ? updatedTenant : t))
      );
    }
    setSelectedTenant(null); // Close modal
  };
  

  const handleDelete = async (id) => {
    try {
      await deleteTenant(id);
      setTenants((prev) => prev.filter((tenant) => tenant.id !== id));
    } catch (error) {
      console.error("Error deleting tenant:", error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 bg-black text-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4 text-center">Tenant List</h2>
      <div className="space-y-4">
        {tenants.map((tenant) => (
          <div
            key={tenant._id}
            className="flex items-center justify-between bg-gray-900 p-4 rounded-lg shadow"
          >
            <div>
              <p className="text-lg font-medium">{tenant.name}</p>
            </div>
            <div className="flex gap-4">
              <button
                onClick={() => handleEdit(tenant)}
                className="flex items-center gap-2 px-3 mx-2 py-1.5 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                <Pencil size={16} /> Edit
              </button>
              <button
                onClick={() => handleDelete(tenant.id)}
                className="flex items-center gap-2 px-3 py-1.5 bg-red-600 text-white rounded hover:bg-red-700"
              >
                <Trash2 size={16} /> Delete
              </button>
              <Link
                to={`/dashboard/tenants/${tenant.id}`}
                className="flex items-center gap-2 px-3 py-1.5 bg-gray-700 text-white rounded hover:bg-gray-800"
              >
                <Info size={16} /> Details
              </Link>
            </div>
          </div>
        ))}
      </div>
      {loading && <p className="text-center mt-4">Loading...</p>}
      <div className="text-center mt-6">
        <button
          onClick={() => setPage((prev) => prev + 1)}
          disabled={loading}
          className="px-4 py-2 bg-white text-black rounded shadow hover:bg-gray-300 disabled:opacity-50"
        >
          Load More
        </button>
      </div>

      {/* Modal */}
      {selectedTenant && (
        <div className="fixed inset-0 flex items-center justify-center bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <UpdateForm tenant={selectedTenant} onClose={handleCloseModal} />
          </div>
        </div>
      )}
    </div>
  );
};

export default TenantList;
