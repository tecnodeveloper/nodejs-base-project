import express from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from '../nodejs-base-project/swagger.json' with { type: 'json' };
const app = express();
app.get('/health', (req, res) => {
  res.status(200).json({ message: 'Your site is health' });
});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(3000);
