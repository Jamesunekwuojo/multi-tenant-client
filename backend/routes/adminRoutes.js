import express from 'express';

import { createAdmin, loginAdmin } from '../controllers/adminController.js';




const router = express.Router();

router.post('/signup', createAdmin);

router.post('/login',  loginAdmin);

router.get('/logout', )

router.get('/',)


export default router;