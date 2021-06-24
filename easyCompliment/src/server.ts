import 'reflect-metadata';
import express from 'express';
import 'express-async-errors';
import { errorInterceptor } from './middlewares/errorInterceptor';

import { router } from './routes';

import './database'

const app = express();

app.use(express.json());

app.use(router); // Insert the routes in the express

// Call Middleware
app.use(errorInterceptor);

app.listen(3000, () => console.log('Server is running'));