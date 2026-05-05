import { validate } from '../middlewares/validate.middleware.js';
import { bookSchema } from '../validations/book.validation.js';
import { createBook } from '../controllers/book.controllers.js';
import express from 'express';
const router = express.Router();

router.post('/', validate(bookSchema), createBook);
export default router;
