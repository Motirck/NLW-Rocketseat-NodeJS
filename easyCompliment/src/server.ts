import 'reflect-metadata';
import express from 'express';

import { router } from './routes';

import './database'

const app = express();

app.use(express.json());

app.use(router); // Insert the routes in the express

app.listen(3000, () => console.log('Server is running'));