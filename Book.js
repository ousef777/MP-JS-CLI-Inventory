import { v4 as uuid4 } from "uuid";

import books from "./data/books.js";

const Book = {};

Book.create = function (bookData) {
  const newBook = { ...bookData, published: +bookData.published, id: uuid4() };
  books.push(newBook);
  return newBook;
};

Book.find = function (where) {
  return books;
};

Book.findById = function (bookId) {
  return books.find((book) => book.id === bookId);
};

Book.delete = function (bookId) {
  const deleteIndex = books.findIndex((book) => book.id === bookId);
  if (deleteIndex !== -1) books.splice(deleteIndex, 1);
};

export default Book;
