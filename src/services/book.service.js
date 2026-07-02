// src/services/book.service.js
import { prisma } from '../lib/prisma.js';

export const bookService = {
  createBook: async (data) => {
    const { name, authors, price, publisher } = data;

    if (price < 0) {
      throw new Error('Price cannot be negative');
    }

    return await prisma.book.create({
      data: {
        name,
        price,
        publisher,
        authors: {
          create: authors.map((authorName) => ({ name: authorName })),
        },
      },
    });
  },

  updateBook: async (id, data) => {
    const bookId = Number(id);

    if (!bookId || isNaN(bookId)) {
      throw new Error('Invalid book id');
    }

    const existingBook = await prisma.book.findUnique({
      where: { id: bookId },
    });

    if (!existingBook) {
      throw new Error('BOOK_NOT_FOUND');
    }

    const { name, authors, price, publisher } = data;

    if (price !== undefined && price < 0) {
      throw new Error('Price cannot be negative');
    }

    return await prisma.book.update({
      where: { id: bookId },
      data: {
        ...(name && { name }),
        ...(price !== undefined && { price }),
        ...(publisher && { publisher }),
        authors: authors
          ? {
              deleteMany: {},
              create: authors.map((authorName) => ({ name: authorName })),
            }
          : undefined,
      },
    });
  },
};
