// import express from 'express';

// import { PrismaClient } from '@prisma/client/extension';

// const prisma = new PrismaClient();

// // const prisma = new PrismaClient();
// const router = express.Router();
// export default router.post('/book', async (req, res) => {
//   const userData = req.body;
//   const { id, Name, author, price, publisher } = userData;
//   console.log(id, bookName, author, price, publisher);
//   if (!bookName || bookName.trim() === '' || bookName === String) {
//     res.status(400).json({
//       message: 'Book name is not correct',
//     });
//   }
//   const existingBook = await prisma.Book.findFirst({
//     where: {
//       bookName: bookName,
//     },
//   });
//   if (existingBook) {
//     res.status(409).json({
//       message: 'Book name already exist',
//     });
//   }
//   if (price <= 0) {
//     res.status(400).json({
//       message: 'Price must be greater than 0',
//     });
//   }
//   const newBook = await prisma.Book.create({
//     data: {
//       id,
//       bookName,
//       author,
//       price,
//       publisher,
//     },
//   });
//   res.status(201).json({
//     message: 'User created successfully',
//     data: newBook,
//   });
// });
