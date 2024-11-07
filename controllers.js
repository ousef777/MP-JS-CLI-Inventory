import inquirer from "inquirer";

import Book from "./Book.js";
import showMenu from "./menu.js";

export function addBook() {
  inquirer
    .prompt([
      { name: "title", message: "Enter book title:" },
      { name: "author", message: "Enter the author name:" },
      { name: "genre", message: "Enter the genre:" },
      {
        name: "published",
        type: "input",
        message: "Enter the publishing year:",
        validate: (year) => {
          const yearNum = parseInt(year, 10);
          if (isNaN(yearNum)) {
            return "Please enter a valid number for the publishing year.";
          }
          return (
            yearNum <= new Date().getFullYear() ||
            "This book was published in the future??"
          );
        },
      },
    ])
    .then((book) => {
      Book.create(book);
      console.log(`Added ${book.title} by ${book.author}.`);
      showMenu();
    });
}

export function updateBook() {
  const books = Book.findAll();
  if (books.length === 0) {
    console.log("No books available to update.");
    return showMenu();
  }

  inquirer
    .prompt([
      {
        type: "list",
        name: "bookId",
        message: "Choose a book to update:",
        choices: books.map((book) => ({ name: book.title, value: book.id })),
      },
    ])
    .then(({ bookId }) => {
      const book = Book.findById(bookId);
      inquirer
        .prompt([
          {
            name: "title",
            message: "Enter new title (leave blank to keep current):",
          },
          {
            name: "author",
            message: "Enter new author (leave blank to keep current):",
          },
          {
            name: "genre",
            message: "Enter new genre (leave blank to keep current):",
          },
          {
            name: "published",
            type: "input",
            message: "Enter new published year (leave blank to keep current):",
            validate: (year) => {
              const yearNum = parseInt(year, 10);
              if (isNaN(yearNum)) {
                return "Please enter a valid number for the publishing year.";
              }
              return (
                yearNum <= new Date().getFullYear() ||
                "This book was published in the future??"
              );
            },
          },
        ])
        .then((updates) => {
          const { title, author, genre, published } = updates;
          if (title) book.title = title;
          if (author) book.author = author;
          if (genre) book.genre = genre;
          if (published) book.published = published;
          console.log(`Updated ${book.title}.`);
          showMenu();
        });
    });
}

export function deleteBook() {
  const books = Book.findAll();
  if (books === 0) {
    console.log("No books available to delete.");
    return showMenu();
  }

  inquirer
    .prompt([
      {
        type: "list",
        name: "bookId",
        message: "Choose a book to delete:",
        choices: books.map((book) => ({ name: book.title, value: book.id })),
      },
    ])
    .then(({ bookId }) => {
      Book.delete(bookId);
      console.log(`Deleted book: "${bookId}".`);
      showMenu();
    });
}

export function viewBooks() {
  const books = Book.findAll();
  console.log("\nCurrent Book Catalgoue:");
  if (books.length === 0) {
    console.log("No books in the catalgoue.");
  } else {
    console.table(books, ["title", "author", "genre", "published"]);
  }
  showMenu();
}
