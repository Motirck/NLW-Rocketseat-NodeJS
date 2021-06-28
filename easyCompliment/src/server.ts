import 'reflect-metadata';
import express from 'express';
import 'express-async-errors';
import { errorInterceptor } from './middlewares/errorInterceptor';
import cors from 'cors'
import swaggerUi from 'swagger-ui-express'

import { router } from './routes';
import swaggerDocs from './swagger.json'

import './database'

const app = express();
app.use(cors());

app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use('/v1', router); // Insert the routes in the express

// Call Middleware
app.use(errorInterceptor);

app.listen(3000, () => console.log('Server is running'));