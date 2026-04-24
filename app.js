import express from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './swagger.json' with { type: 'json' };

import router from './src/routes/createBook.js';
import { logger } from './src/middlewares/logger.js';
import { notFound } from './src/middlewares/notFound.js';
import { errorHandler } from './src/middlewares/errorHandler.js';
import { asyncHandler } from './utils/asyncHandler.js';
const PORT = 3000;
const app = express();
app.use(logger);
app.use(express.json());

app.use(errorHandler);
app.get('/', (req, res) => {
  res.send('Welcome to dashboard');
});
app.get('/health', (req, res) => {
  res.send({ message: 'Site is healthy.' });
});
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/api', router);

app.use(notFound);
app.use(asyncHandler);

app.listen(PORT);
