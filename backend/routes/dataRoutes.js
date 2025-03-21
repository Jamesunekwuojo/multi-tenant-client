import express from 'express';
import { createData, getData } from '../controllers/dataController.js';
import  resolveTenant  from '../middleware/resolveTenant.js';

/**
 * @swagger
 * /api/data:
 *   get:
 *     summary: Get data for the current tenant
 *     responses:
 *       200:
 *         description: Data retrieved successfully
 *   post:
 *     summary: Create new data for the current tenant
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               key:
 *                 type: string
 *                 example: Data Key
 *               value:
 *                 type: string
 *                 example: Data Value
 *     responses:
 *       201:
 *         description: Data created successfully
 */

const router = express.Router();

router.use(resolveTenant);
router.post('/', createData);
router.get('/', getData);

export default router;