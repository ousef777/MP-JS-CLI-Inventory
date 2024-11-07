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
  const books = Book.find();
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
  const books = Book.find();
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
  const books = Book.find();
  console.log("\nCurrent Book Catalgoue:");
  if (books.length === 0) {
    console.log("No books in the catalgoue.");
  } else {
    console.table(books, ["title", "author", "genre", "year"]);
  }
  showMenu();
}

export function searchBook() {
  const choices = [
    { name: "Search by title", value: "title" },
    { name: "Search by author", value: "author" },
    { name: "Search by genre", value: "genre" },
    { name: "Search by year", value: "year" },
  ];
  inquirer.prompt([
    {
      type: "list",
      name: "action",
      message: "Select an option:",
      choices,
    },
  ])
    .then((answers) => {
      switch (answers.action) {
        case "title":
          inquirer.prompt([{ name: "title", message: "Enter the title:" },]).then(title => findBook(title.title));
          break;
        case "author":
          inquirer.prompt([{ name: "author", message: "Enter the author:" },]).then(author => findBook(author.author));
          break;
        case "genre":
          inquirer.prompt([{ name: "genre", message: "Enter the genre:" },]).then(genre => findBook(genre.genre));
          break;
        case "year":
          inquirer.prompt([{ name: "year", message: "Enter the year:" },]).then(year => findBook(year.year));
          break;
      }
    });
}

export function findBook(search) {
  const books = Book.find().filter(book => Object.values(book).join().includes(search)); //parseInt(year) == NaN ? year : +year
  console.log("\nCurrent Book Catalgoue:");
  if (books.length === 0) {
    console.log("No books in the catalgoue.");
  } else {
    console.table(books, ["title", "author", "genre", "year"]);
  }
  showMenu();
}