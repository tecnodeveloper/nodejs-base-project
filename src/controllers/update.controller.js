import { bookService } from '../services/book.service.js';

export const updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await bookService.updateBook(id, req.body);
    return res.status(200).json({
      message: 'Book updated successfully',
      data: result,
    });
  } catch (error) {
    if (error.message === 'BOOK_NOT_FOUND') {
      return res.status(404).json({ message: 'Book not found' });
    }
    return res.status(400).json({ message: error.message });
  }
};
