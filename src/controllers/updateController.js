import { string } from 'zod';
import { prisma } from '../routes/createBook.js';
export const bookUpdatedData = async (req, res) => {
  const numberId = Number(req.params.param);
  const { bookName, author, price, publisher } = req.body;
  if (numberId !== Number || numberId === NaN) {
    return res.json({ 'message ': 'This is not number' });
  }

  if (typeof bookName !== string) {
    return res.json({ message: 'Please change book Name' });
  }
  if (price > 0) {
    return res.json({ message: 'Price should be greater than 0' });
  }
  if (typeof publisher !== string) {
    return res.json({ message: 'Please enter again publisher' });
  }

  const updateBook = await prisma.book.update({
    where: { id: numberId },
    data: req.body,
  });
  res
    .status(200)
    .json({ message: 'Books have been successfully updated', updateBook });
};
