import express from 'express';
import { testRedis } from '../controllers/redisController.js';

const router = express.Router();

router.get('/', testRedis); 


export default router;