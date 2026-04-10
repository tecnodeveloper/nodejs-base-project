import { prisma } from '../routes/createBook.js';
export const deleteBook = async (req, res) => {
  const BookDelete = await prisma.book.delete({
    where: { id: Number(req.params.param) },
  });
  res.json({ message: 'Book Deleted Successfully' });
};
