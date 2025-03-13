import express from 'express';
import {login, logout, resetPassword} from '../controllers/auth.controller.js';
import {verifySession} from '../middlewares/auth.middlewares.js';

const router = express.Router();

router.post('/login', login);
router.post('/logout', verifySession, logout);
router.post('/reset-password', resetPassword);

export default router;