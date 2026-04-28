import { prisma } from '../routes/createBook.js';
export const bookUpdatedData = async (req, res) => {
  const numberId = Number(req.params.param);
  const { bookName, author, price, publisher } = req.body;

  if (isNaN(numberId)) {
    return res.status(400).json({ message: 'This is not number' });
  }
  console.log(req.body);
  console.log(bookName, author, price, publisher);

  if (price <= 0) {
    return res.status(400).json({ message: 'Price should be greater than 0' });
  }
  // if (bookName !== 'string') {
  //   return res.status(400).json({ message: 'Please change book Name' });
  // }
  // if (typeof publisher !== 'string') {
  //   return res
  //     .status(400)
  //     .json({ message: 'Please enter Name of publisher again' });
  // }
  console.log(bookName, author, price, publisher, numberId);

  const updateBook = await prisma.book.update({
    where: { id: numberId },
    data: {
      bookName,
      price,
      publisher,
      author: {
        set: [],
        create: author.map((name) => ({ name })),
      },
    },
  });
  res
    .status(200)
    .json({ message: 'Books have been successfully updated', updateBook });
};
