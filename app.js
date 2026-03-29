import express from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './swagger.json' with { type: 'json' };
const PORT = 3000;
const app = express();
app.get('/health', (req, res) => {
  res.send({ message: 'Healthy gamers' });
});
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.listen(PORT);
