import { prisma } from '../routes/createBook.js';
export const BookCreate = async (req, res) => {
  //   const userData = req.body;
  const { bookName, author, price, publisher } = req.body;
  if (!bookName || bookName.trim() === '') {
    return res.status(400).json({
      message: 'Book name is not correct',
    });
  }

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
};
