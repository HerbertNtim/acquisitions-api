import logger from '#config/logger.js';
import express from 'express';

const app = express();

app.get('/', (req, res) => {
  logger.info('Hello from Acquisitions!'),

  res.status(200).send('Hello from Acquisitions!'); 
});

export default app;
