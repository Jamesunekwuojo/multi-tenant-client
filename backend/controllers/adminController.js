import prisma from "../config/db.js";
import dotenv from "dotenv"
dotenv.config()
import bcrypt from "bcryptjs";

import jwt from "jsonwebtoken";
import process from "process";



const JWT_SECRET = process.env.JWT_SECRET;

export const createAdmin = async (req, res, next) => {
  const { name, email, password } = req.body;

  console.log("Name, email", req.body);

  console.log("DATABASE_URL:", process.env.DATABASE_URL);


  try {
    // Check if the admin already exists
    const existingAdmin = await prisma.admin.findUnique({ where: { email } });
    if (existingAdmin) {
      return res.status(400).json({ error: "Admin already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const admin = await prisma.admin.create({
      data: { name, email, password: hashedPassword },
    });

    // Generate JWT token
    const token = jwt.sign({ adminId: admin.id, email:admin.email }, JWT_SECRET, {
      expiresIn: "1h",
    });

    console.log("Admin registered succesfully")

    res.status(201).json({ message: "Admin registered successfully", token, admin });

  } catch (error) {
   
    console.log(error.message)
    // next(err);
  }
};

export const loginAdmin = async (req, res, next) => {
  console.log("Incoming request to login admin")
  const { email, password } = req.body;
  console.log(req.body)

  if(!email || !password) {
    console.log("Password and Email are required")
    res.status(400).json({error:"password and email are needed" })
  }

  

  try {
    const admin = await prisma.admin.findUnique({ where: { email } });
    if(admin === 0) {
      console.log("No admin exist")
    }
    if (!admin) {
      console.log("Error", )
      return res.status(400).json({ error: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, admin.password);

    if (!isMatch) {
      console.log("Invalid credentials")
      return res.status(400).json({ error: "password is incorrect " });
    }

    // Generate JWT token
    const token = jwt.sign({ adminId: admin.id, email:admin.email }, JWT_SECRET, {
      expiresIn: "1h",
    });


    console.log("Admin login successful")

    res.json({ message: "Admin logged in successfully", token, admin });
  } catch (err) {
    console.log(err);
    next(err);
  }
};
