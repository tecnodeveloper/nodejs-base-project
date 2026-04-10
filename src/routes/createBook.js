import express from 'express';
import path from 'path';
import { bookUpdatedData } from '../controllers/updateController.js';
import { BookCreate } from '../controllers/createController.js';
import { readBook, readAllBook } from '../controllers/readController.js';
import { deleteBook } from '../controllers/deleteController.js';
import { PrismaClient } from '@prisma/client';
import { PrismaBetterSqlite3 } from '@prisma/adapter-better-sqlite3';

const adapter = new PrismaBetterSqlite3({
  url: `file:${path.resolve('dev.db')}`,
});
export const prisma = new PrismaClient({ adapter });

const router = express.Router();
const checkBookExist = async (req, res, next) => {
  const book = await prisma.book.findUnique({
    where: { id: Number(req.params.param) },
  });
  if (!book) {
    res.status(404).json({ message: 'Book not found' });
  }
  req.book = book;
  next();
};

router.post('/book', BookCreate);
router.patch('/book/:param', checkBookExist, bookUpdatedData);
router.get('/book', readAllBook);
router.get('/book/:param', checkBookExist, readBook);
router.delete('/book/:param', checkBookExist, deleteBook);
export default router;
