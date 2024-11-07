import inquirer from "inquirer";

import { addBook, deleteBook, updateBook, viewBooks } from "./controllers.js";

function showMenu() {
  console.log("\n");
  const choices = [
    { name: "Add a book", value: "add" },
    { name: "Update a book", value: "update" },
    { name: "Delete a book", value: "delete" },
    { name: "View all books", value: "list" },
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
        case "delete":
          deleteBook();
          break;
        case "list":
          viewBooks();
          break;
        case "exit":
          console.log("Exiting the program.");
          break;
      }
    });
}

export default showMenu;
