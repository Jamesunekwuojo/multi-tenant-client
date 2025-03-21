// import mongose from 'mongoose';
// import dotenv from 'dotenv';
// dotenv.config();



// const connectDB = async () => {
//     try {
//         await mongose.connect(process.env.DATABASE_URL, {
//         // useNewUrlParser: true,
//         // useUnifiedTopology: true,
        
//         });
//         console.log('Database connected');
//     } catch (error) {
//         console.log('Error: ', error.message);
//     }
// }

// export default connectDB;

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const testConnection = async () => {
    try {
        await prisma.$connect();
        console.log('Database connected successfully');
    } catch (error) {
        console.error('Error connecting to the database', error);
    } 
};

testConnection();

export default prisma;