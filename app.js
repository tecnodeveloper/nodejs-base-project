import express from 'express';
import swaggerUi from 'swagger-ui-express';
// import YAML from 'yamljs';
import swaggerDocument from './swagger.json' with { type: 'json' };
// import swaggerDocument from YAML.load('./swagger.yaml');
import router from './src/routes/createBook.js';
const PORT = 3000;
const app = express();
app.use(express.json());
app.get('/', (req, res) => {
  res.send('Welcome to dashboard');
});
app.get('/health', (req, res) => {
  res.send({ message: 'Site is healthy.' });
});
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/api', router);
app.listen(PORT);
