// import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { getTenantId } from "../services/api";

// const TenantDetails = () => {
//   const { id } = useParams();
//   const [tenant, setTenant] = useState({});
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     getTenantId(id)
//       .then((response) => {
//         console.log(response.data);
//         setTenant(response.data.tenant);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error(error);
//         setLoading(false);
//       });
//   }, [id]);

//   if(!tenant || loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="flex flex-items-center tenant-details">
//       <h2>{tenant.name}</h2>
//       <p>Subdomain: {tenant.subdomain}</p>
//       <p>Created At: {new Date(tenant.createdAt).toLocaleString()}</p>

//       <p>Additional data: {tenant.data}</p>
//     </div>
//   );
// };

// export default TenantDetails;


import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getTenantId } from "../services/api";
import { Loader, Calendar, Globe } from "lucide-react";

const TenantDetails = () => {
  const { id } = useParams();
  const [tenant, setTenant] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getTenantId(id)
      .then((response) => {
        console.log(response.data);
        setTenant(response.data.tenant);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-white">
        <Loader className="animate-spin" size={32} />
      </div>
    );
  }

  if (!tenant) {
    return <div className="text-center text-white">Tenant not found</div>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6 bg-black text-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-semibold mb-4">{tenant.name}</h2>
      <div className="space-y-3">
        <p className="flex items-center gap-2 text-lg">
          <Globe size={18} /> Subdomain: {tenant.subdomain}
        </p>
        <p className="flex items-center gap-2 text-lg">
          <Calendar size={18} /> Created At: {new Date(tenant.createdAt).toLocaleString()}
        </p>
        <p className="text-lg">Additional Data: {tenant.data}</p>
      </div>
    </div>
  );
};

export default TenantDetails;
