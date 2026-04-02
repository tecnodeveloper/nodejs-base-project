import express from 'express';
import path from 'path';

import { PrismaClient } from '@prisma/client';
import { PrismaBetterSqlite3 } from '@prisma/adapter-better-sqlite3';
const adapter = new PrismaBetterSqlite3({
  url: `file:${path.resolve('dev.db')}`,
});
export const prisma = new PrismaClient({ adapter });
const router = express.Router();

export default router.post('/book', async (req, res) => {
  const userData = req.body;
  const { bookName, author, price, publisher } = userData;
  console.log(bookName, author, price, publisher);
  if (!bookName || bookName.trim() === '') {
    return res.status(400).json({
      message: 'Book name is not correct',
    });
  }
  console.log(await prisma.book.findFirst());

  const existingBook = await prisma.book.findFirst({
    where: {
      bookName,
    },
  });
  if (existingBook) {
    return res.status(400).json({
      message: 'Book name already exist',
    });
  }
  if (price <= 0) {
    return res.status(400).json({
      message: 'Price must be greater than 0',
    });
  }
  console.log();
  const newBook = await prisma.book.create({
    data: {
      bookName,
      price,
      publisher,
      author: {
        create: author.map((name) => ({ name })),
      },
    },
  });
  return res.status(201).json({
    message: 'User created successfully',
    data: newBook,
  });
});
