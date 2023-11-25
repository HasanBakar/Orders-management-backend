import express, { Router } from 'express';
import { userControllers } from './user.controller';

const router: Router = express.Router();

router.get('/', userControllers.initialRoute);

router.post('/users', userControllers.createUser);

router.get('/users', userControllers.getAllUser);

router.get('/users/:userId', userControllers.getSingleUser);

router.put('/users/:userId', userControllers.updateUser);

router.delete('/users/:userId', userControllers.deleteSingleUser);

router.put('/users/:userId/orders', userControllers.createOrder);

export const userRoutes = router;
