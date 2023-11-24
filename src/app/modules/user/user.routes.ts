import express, { Router } from 'express';
import { userControllers } from './user.controller';

const router: Router = express.Router();

router.get('/', userControllers.initialRoute);

router.post('/users', userControllers.createUser);

export const userRoutes = router;
