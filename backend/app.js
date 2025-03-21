
import express from 'express';
// import connectDB from './config/db.js';
import tenantRoutes from './routes/tenantRoutes.js';
import dataRoutes from './routes/dataRoutes.js';
import swaggerSetup from './swagger.js';
import errorHandler  from './middleware/errorHandler.js';
import cors from 'cors';
import redisRoutes from "./routes/redisRoutes.js";

import adminRoutes from './routes/adminRoutes.js';
import authcheckRoutes from './routes/authcheckRoute.js';

import dotenv from "dotenv"

dotenv.config()


const app = express();

app.use(cors(
    {
    origin: 'http://localhost:5173',  
    credentials: true,  
    }
));

app.use(express.json());
swaggerSetup(app); 




// import resolveAdmin from '../middleware/resolveAdmin.js';


app.get('/', (req, res) =>res.send('API is running...'))

app.use('/api/tenants', tenantRoutes);
app.use('/api/data', dataRoutes);

app.use('/api/admin', adminRoutes);

app.use('/api/test-redis', redisRoutes);

app.use('/api/authcheck', authcheckRoutes);

// Error handling
app.use(errorHandler);

export default app;