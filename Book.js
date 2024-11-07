import { v4 as uuid4 } from "uuid";

import books from "./data/books.js";

const Book = {};

Book.create = function (bookData) {
  const newBook = { ...bookData, id: uuid4() };
  books.push(newBook);
  return newBook;
};

Book.findAll = function (where) {
  return books;
};

Book.findById = function (bookId) {
  return books.find((book) => book.id === bookId);
};

Book.delete = function (bookId) {
  books = books.filter((book) => book.id !== bookId);
};

export default Book;
