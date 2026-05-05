import express from 'express';
const app = express();
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './swagger.json' with { type: 'json' };
import router from './src/routes/book.routes.js';
app.use(express.json());

// base route
app.use('/books', router);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(3000);
