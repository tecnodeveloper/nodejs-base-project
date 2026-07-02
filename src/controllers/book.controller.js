import { bookService } from '../services/book.service.js';

export const createBook = async (req, res) => {
  const result = await bookService.createBook(req.body);
  res.status(201).json(result);
};
