import inquirer from "inquirer";

import { addBook, deleteBook, updateBook, viewBooks, searchBook } from "./controllers.js";
import start from "./index.js";

function showMenu() {
  console.log("\n");
  const choices = [
    { name: "Add a book", value: "add" },
    { name: "Update a book", value: "update" },
    { name: "Search a book", value: "search" },
    { name: "Delete a book", value: "delete" },
    { name: "View all books", value: "list" },
    { name: "Choose a different catergory", value: "back" },
    { name: "Exit", value: "exit" },
  ];
  inquirer
    .prompt([
      {
        type: "list",
        name: "action",
        message: "Choose an action:",
        choices,
      },
    ])
    .then((answers) => {
      switch (answers.action) {
        case "add":
          addBook();
          break;
        case "update":
          updateBook();
          break;
        case "search":
          searchBook();
          break;
        case "delete":
          deleteBook();
          break;
        case "list":
          viewBooks();
          break;
        case "back":
          start();
          break;
        case "exit":
          console.log("Exiting the program.");
          break;
      }
    });
}

export default showMenu;
