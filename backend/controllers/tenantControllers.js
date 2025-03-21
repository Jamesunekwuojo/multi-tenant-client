// const prisma = require('../config/db');
// const { getCache, setCache } = require('../services/cache');
// const { NotFoundError, ValidationError } = require('../utils/errors');

import prisma from "../config/db.js";
import { getCache, setCache } from "../services/cache.js";

// export const createTenant = async (req, res, next) => {
//   console.log("Incommig request Creating tenant");
//   const { name, subdomain, data } = req.body;

//   console.log("Name, subdomain", req.body);

//   const adminId = req.adminId;

//   console.log("Admin ID", adminId);

//   try {
//     const tenant = await prisma.tenant.create({
//       data: { name, subdomain, data, adminId },
//     });
//     console.log("Tenant created succesfully");

//     return res.status(201).json(tenant);
//   } catch (err) {
//     console.log("Error creating tenant", err);

//     res.status(400).json({ error: "Error creating tenant" });
//   }
// };


export const createTenant = async (req, res, next) => {
  console.log("Incoming request Creating tenant");
  const { name, subdomain, data } = req.body;

  try {
    const tenant = await prisma.tenant.create({
      data: { name, subdomain, data, adminId: req.adminId },
    });

    console.log("Tenant created successfully");

    // Fetch all tenants again and update cache
    const allTenants = await prisma.tenant.findMany();
    await setCache("tenants", allTenants);

    return res.status(201).json(tenant);
  } catch (err) {
    console.log("Error creating tenant", err);
    res.status(400).json({ error: "Error creating tenant" });
  }
};




// export const getTenants = async (req, res) => {
//   const { page = 1, limit = 5 } = req.query;
//   console.log("Incoming request to get tenants");

//   try {
//     let cachedTenants = await getCache("tenants");

//     if (cachedTenants) {
//       console.log("Returning paginated results from cache...", cachedTenants);
//       // Apply skip and take on cached data
//       const paginatedTenants = cachedTenants.slice(
//         (page - 1) * limit,
//         page * limit
//       );
//       return res.json({
//         message: "Cached Tenants:",
//         tenants: paginatedTenants,
//       });
//     }

//     // If not cached, fetch from DB
//     const tenants = await prisma.tenant.findMany({
//       skip: (page - 1) * limit,
//       take: Number(limit),
//     });

//     console.log("Tenants fetched successfully,", tenants);

//     // Store full tenant list in cache for future paginated requests
//     const allTenants = await prisma.tenant.findMany();
//     await setCache("tenants", allTenants);

//     res.json({ message: "Tenants data:", tenants });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// };

export const getTenants = async (req, res) => {
  const { page = 1, limit = 5 } = req.query;
  console.log("Incoming request to get tenants");

  try {
    let cachedTenants = await getCache("tenants");

    if (cachedTenants && cachedTenants.length > 0) {  // ✅ Ensures cache has data
      console.log("Returning paginated results from cache...", cachedTenants);
      const paginatedTenants = cachedTenants.slice(
        (page - 1) * limit,
        page * limit
      );
      return res.json({
        message: "Cached Tenants:",
        tenants: paginatedTenants,
      });
    }

    // If cache is empty, fetch from DB
    const tenants = await prisma.tenant.findMany({
      skip: (page - 1) * limit,
      take: Number(limit),
    });

    console.log("Tenants fetched successfully,", tenants);

    // Store all tenants in cache for future paginated requests
    if (tenants.length > 0) {
      const allTenants = await prisma.tenant.findMany();
      await setCache("tenants", allTenants);
    }

    res.json({ message: "Tenants data:", tenants });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};



export const getTenantId = async (req, res) => {
  try {

    const { id } = req.params;
    console.log("Incoming request to get tenant by id", id);

    const tenant = await prisma.tenant.findUnique({
      where: { id: id },
    });

    if (!tenant) {
      console.log("Tenant not found");
      throw new Error("Tenant not found");
    }

    console.log("Tenant by Id fetched successfully", tenant);

    return res.json({message:"Tenant found", tenant:tenant});
    
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: "Error fetching tenant" });
    
  }
}

export const updateTenant = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, subdomain, data } = req.body;

    console.log("Incoming request to update tenant", id);

    const tenant = await prisma.tenant.update({
      where: { id: id },
      data: { name, subdomain, data },
    });

    console.log("Tenant updated successfully", tenant);

    return res.json({ message: "Tenant updated successfully", tenant });
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: "Error updating tenant" });
  }
};

export const deleteTenant = async (req, res) => {
  try {
    const { id } = req.params;
    console.log("Incoming request to delete tenant", id);

    const tenant = await prisma.tenant.delete({
      where: { id: id },
    });

    console.log("Tenant deleted successfully", tenant);


    // Update cache: Remove the deleted tenant
    let cachedTenants = await getCache("tenants");
    if (cachedTenants) {
      cachedTenants = cachedTenants.filter((t) => t.id !== id);
      await setCache("tenants", cachedTenants );
    }

    return res.json({ message: "Tenant deleted successfully", tenant });
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: "Error deleting tenant" });
  }
};
