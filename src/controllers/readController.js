import { prisma } from '../routes/createBook.js';

export const readAllBook = async (req, res) => {
  const Bookall = await prisma.book.findMany();
  res.status(200).json({ Bookall });
};

export const readBook = async (req, res) => {
  const Book = await prisma.book.findUnique({
    where: { id: Number(req.params.param) },
  });
  res.status(200).json(Book);
};
