import { skip } from 'node:test';
import { prisma } from '../routes/createBook.js';
import { equal } from 'node:assert';

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

export const readBookCondition = async (req, res) => {
  try {
    const limit = parseInt(req.query.limit) || 10;
    const page = parseInt(req.query.page) || 1;
    // Array index start with zero but now page start with 1 so to start the page with zero we have to - by 1
    const skip = (page - 1) * limit;

    const where = {};

    if (req.query.minPrice) {
      where.price = {
        // Rest operator all the prices don't override each other instead they make collections
        ...where.price,
        // greater than equals
        gte: parseFloat(req.query.minPrice),
      };
    }

    if (req.query.maxPrice) {
      where.price = {
        ...where.price,
        lte: parseFloat(req.query.maxPrice),
      };
    }

    if (req.query.author) {
      where.author = {
        // Author have join table relation in my prisma schema of database
        some: {
          name: {
            contains: req.query.author,
          },
        },
      };
    }

    const [items, totalCount] = await prisma.$transaction([
      prisma.book.findMany({
        where,
        skip,
        take: limit,
        orderBy: { id: 'desc' },
        include: { author: true },
      }),
      prisma.book.count({ where }),
    ]);

    res.status(200).json({
      total: totalCount,
      page,
      limit,
      data: items,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
