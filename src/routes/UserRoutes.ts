import express, { Router } from 'express';
import UserRoutes from '../controllers/UserController';

const router = Router();
const userRoutes = new UserRoutes();

router.get('/', userRoutes.get);

export default router;