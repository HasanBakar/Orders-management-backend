import express, { Application } from 'express';
import cors from 'cors';
import { userRoutes } from './app/modules/user/user.routes';

const app: Application = express();

// parsers middleware
app.use(express.json());
app.use(cors());
app.use('/api', userRoutes);

export default app;
