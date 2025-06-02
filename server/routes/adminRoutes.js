import express from 'express';
import { adminLogin , adminSignup } from '../controllers/adminControllers.js';

const router = express.Router();

router.post('/signup' , adminSignup);
router.post('/login' , adminLogin);

export default router;