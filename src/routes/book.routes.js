import { validate } from '../middlewares/validate.middleware.js';
import {
  bookSchema,
  updateBookSchema,
} from '../validations/book.validation.js';
import { createBook } from '../controllers/book.controller.js';
import { updateBook } from '../controllers/update.controller.js';
import express from 'express';
const router = express.Router();

router.post('/', validate(bookSchema), createBook);
router.put('/:id', validate(updateBookSchema), updateBook);

export default router;
