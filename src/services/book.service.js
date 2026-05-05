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
          create: authors.map((authorName) => ({
            name: authorName,
          })),
        },
      },
    });
  },
};
