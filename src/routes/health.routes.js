import { Router } from 'express';

Router.get('/health', (req, res) => {
  res.status(200).json({ message: 'Your site is health' });
});
