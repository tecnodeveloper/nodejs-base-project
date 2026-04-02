import express from 'express';

import { PrismaClient } from '@prisma/client';
import { PrismaBetterSqlite3 } from '@prisma/adapter-better-sqlite3';
const adapter = new PrismaBetterSqlite3({
  url: 'file:./dev.db',
});

export const prisma = new PrismaClient({ adapter });

// const prisma = new PrismaClient();
const router = express.Router();
export default router.post('/book', async (req, res) => {
  const userData = req.body;
  const { id, bookName, author, price, publisher } = userData;
  console.log(id, bookName, author, price, publisher);
  if (!bookName || bookName.trim() === '') {
    return res.status(400).json({
      message: 'Book name is not correct',
    });
  }
  console.log(await prisma.book.findFirst());

  const existingBook = await prisma.book.findFirst({
    where: {
      bookName: bookName,
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
  const newBook = await prisma.Book.create({
    data: {
      id,
      bookName,
      author,
      price,
      publisher,
    },
  });
  return res.status(201).json({
    message: 'User created successfully',
    data: newBook,
  });
});
